import { useEffect, useReducer, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Profile.css";
import { ProfileIcon } from "../../components/ProfileIcon";
import { FollowButton, LargeButton } from "../../components/Buttons";
import Post from "../../components/Post";
import { routes } from "../../constants/routes";
import { AuthContext } from "../../authentication/contexts/AuthContext";
import {
  getFollowCounters,
  getUserByUserName,
} from "../../infrastructure/firebase/repositories/user.repository";
import { getPostsByUserId } from "../../infrastructure/firebase/repositories/post.repository";
import { ACTIONS, profileReducer } from "../../reducers/profile-info.reducer";

export const ProfileUserPage = () => {
  const { userName } = useParams();
  const navigate = useNavigate();
  const { getLogedUserInfo } = useContext(AuthContext);
  const logedUser = getLogedUserInfo();

  const initialState = {
    profileInfo: null,
    posts: [],
    followCounters: { followingCount: 0, followersCount: 0 },
    users: null,
    following: null,
    followers: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);
  const [reFetchCounters, setReFetchCounters] = useState(false);

  const fetchProfileInfo = async () => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });

      let profileData;
      if (userName === logedUser.userName) {
        profileData = logedUser;
      } else {
        profileData = await getUserByUserName(userName);
        if (!profileData) {
          dispatch({ type: ACTIONS.SET_LOADING, payload: false });
          dispatch({ type: ACTIONS.SET_ERROR, payload: "Usuario no encontrado" });
          return; 
        }
      }

      dispatch({ type: ACTIONS.SET_PROFILE_INFO, payload: profileData });
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Error fetching profile info",
      });
      console.error(error);
    }
  };

  const fetchFollowsCounter = async () => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      
      const followCounters = await getFollowCounters(userName);
      dispatch({ type: ACTIONS.SET_FOLLOW_COUNTERS, payload: followCounters });
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Error fetching follow counters",
      });
      console.error(error);
    }
  };

  const fetchPosts = async (userId) => {
    try {
      const postsData = await getPostsByUserId(userId);
      dispatch({ type: ACTIONS.SET_POSTS, payload: postsData });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: "Error fetching posts" });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  useEffect(() => {
    fetchFollowsCounter();
  }, [reFetchCounters]);

  useEffect(() => {
    if (state.profileInfo?.id) {
      fetchPosts(state.profileInfo.id);
    }
  }, [state.profileInfo]);

  const { profileInfo, posts, followCounters, loading, error } = state;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-container">
      <nav className="sticky-navbar">
        <div className="navbar-profile-content">
          <button className="back-button" onClick={() => navigate(routes.home)}>
            ←
          </button>
          <div className="user-info">
            <h2>{profileInfo.name}</h2>
            <p>{posts.length} posts</p>
          </div>
        </div>
      </nav>

      <div className="profile-header">
        <div className="cover-photo">
          <img style={{ width: "100%" }} src={profileInfo.coverImage} alt="" />
        </div>
        <div className="profile-info">
          <div
            className="flex-row"
            style={{
              width: "100%",
              justifyContent: "space-between",
              marginTop: "-50px",
            }}
          >
            <ProfileIcon imageUrl={profileInfo.profilePhoto} large={true} />
            {userName === logedUser.userName ? (
              <LargeButton
                label="Editar perfil"
                styleType="secondary"
                customStyles={{
                  height: "40px",
                  width: "150px",
                  marginTop: "50px",
                }}
              />
            ) : (
              <FollowButton
                currentUser={logedUser.id}
                targetUser={profileInfo.id}
                customStyles={{ marginTop: "50px" }}
                reFetchFuncion={() => setReFetchCounters(true)}
              />
            )}
          </div>
          <div className="profile-details">
            <h1>{profileInfo.name}</h1>
            <p>@{profileInfo.userName}</p>
            <p>
              Se unió en {profileInfo.registerDate.month} de{" "}
              {profileInfo.registerDate.year}
            </p>
            <p>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("following")}
              >
                {followCounters.followingCount} Siguiendo
              </a>{" "}
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("followers")}
              >
                {followCounters.followersCount} Seguidores
              </a>
            </p>
          </div>
        </div>
      </div>

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};