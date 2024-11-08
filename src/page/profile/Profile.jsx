import { useEffect, useReducer, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ColumnContainer } from "../../components/ColumnContainer";
import "./styles/Profile.css";
import { ProfileIcon } from "../../components/ProfileIcon";
import { FollowButton, LargeButton } from "../../components/Buttons";
import Post from "../../components/Post";
import { routes } from "../../constants/routes";
import { AuthContext } from "../../authentication/contexts/AuthContext";
import { getUserByUserName } from "../../infrastructure/firebase/repositories/user.repository";
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
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const fetchProfileInfo = async () => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });

      let profileData;
      if (userName === logedUser.userName) {
        profileData = logedUser;
      } else {
        profileData = await getUserByUserName(userName);
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

  // Función para cargar los posts del usuario
  const fetchPosts = async (userId) => {
    try {
      const postsData = await getPostsByUserId(userId);
      console.log(postsData);
      dispatch({ type: ACTIONS.SET_POSTS, payload: postsData });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: "Error fetching posts" });
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchProfileInfo();
    };
    loadData();
  }, []);

  useEffect(() => {
    if (state.profileInfo?.id) {
      fetchPosts(state.profileInfo.id);
    }
  }, [state.profileInfo]);

  const { profileInfo, posts, loading, error } = state;

  console.log(profileInfo)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ColumnContainer widths={["50%", "50%"]}>
      <div className="profile-container">
        <nav className="sticky-navbar">
          <div className="navbar-profile-content">
            <button
              className="back-button"
              onClick={() => navigate(routes.home)}
            >
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
            <img
              style={{ width: "100%" }}
              src={profileInfo.coverImage}
              alt=""
            />
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
                <FollowButton currentUser={logedUser.id} targetUser={profileInfo.id} />
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
                {/* <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("following")}
                >
                  {profileInfo.following.length} Siguiendo
                </a>{" "}
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("followers")}
                >
                  {profileInfo.followers.length} Seguidores
                </a> */}
              </p>
            </div>
          </div>
        </div>

        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </ColumnContainer>
  );
};
