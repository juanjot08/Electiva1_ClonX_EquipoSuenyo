import { useContext, useEffect, useReducer, useState } from "react";
import { Card } from "../../components/Card";
import { RectangleButton } from "../../components/Buttons";
import "./Follow.css";
import { useNavigate, useParams } from "react-router-dom";
import { ACTIONS, profileReducer } from "../../reducers/profile-info.reducer";
import {
  getFollowers,
  getFollowing,
  getUserById,
} from "../../infrastructure/firebase/repositories/user.repository";
import { AuthContext } from "../../authentication/contexts/AuthContext";

export const Follow = ({ rute }) => {
  const [displayList, setDisplayList] = useState(rute || "following");
  const { userName } = useParams();
  const navigate = useNavigate();
  const { getLogedUserInfo } = useContext(AuthContext);
  const logedUser = getLogedUserInfo();

  const initialState = {
    profileInfo: null,
    posts: [],
    users: {},
    following: [],
    followers: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const [reFectchList, setReFetchList] = useState(false);


  const fetchFollowers = async () => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const followers = await getFollowers(userName);
      dispatch({ type: ACTIONS.SET_FOLLOWERS, payload: followers });
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Error fetching followers",
      });
      console.error(error);
    }
  };

  const fetchFollowing = async () => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });

      const following = await getFollowing(userName);

      dispatch({ type: ACTIONS.SET_FOLLOWING, payload: following });
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Error fetching following",
      });
      console.error(error);
    }
  };

  const fetchUsersDetails = async (list) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      const userPromises = list.map((item) => getUserById(item.id));

      const usersDetails = await Promise.all(userPromises);

      const usersMap = usersDetails.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      dispatch({ type: ACTIONS.SET_USERS, payload: usersMap });
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Error fetching user details",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchFollowers(), fetchFollowing()]);
    };

    loadData();
  }, [reFectchList]);

  useEffect(() => {
    if (state.following.length > 0 || state.followers.length > 0) {
      const usersToFetch =
        displayList === "following" ? state.following : state.followers;
      fetchUsersDetails(usersToFetch);
    }
  }, [displayList, state.following, state.followers]);

  const { following, followers, loading, users, error } = state;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="follow-container">
      <nav className="sticky-navbar">
        <div className="navbar-profile-content">
          <button
            className="back-button"
            onClick={() => navigate("/" + userName)}
          >
            ←
          </button>
          <div className="user-info">
            <h2>{userName}</h2>
          </div>
        </div>
      </nav>
      <nav className="follow-nav">
        <RectangleButton
          label="Seguidores"
          fn={() => {
            setDisplayList("followers");
            navigate("/" + userName + "/followers");
          }}
          customClass={displayList === "followers" ? "active" : ""}
        />
        <RectangleButton
          label="Seguidos"
          fn={() => {
            setDisplayList("following");
            navigate("/" + userName + "/following");
          }}
          customClass={displayList === "following" ? "active" : ""}
        />
      </nav>
      <div>
        {(displayList === "following" ? following : followers)?.map((item) => {
          const user = users[item.id];
          return user ? (
            <div style={{marginBottom: "15px"}}>
              <Card
                key={user.id}
                image={user.profilePhoto}
                username={user.name}
                usertag={user.userName}
                currentId={logedUser.id}
                targetId={item.id}
                reFetchFunction={() => setReFetchList(!reFectchList)}
              />
            </div>
          ) : null;
        })}
      </div>
    </section>
  );
};
