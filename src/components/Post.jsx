import { ProfileIcon } from "./ProfileIcon";
import "../styles/Components/Post.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { ACTIONS, profileReducer } from "../reducers/profile-info.reducer";
import { getUserById } from "../infrastructure/firebase/repositories/user.repository";

const Post = ({ post }) => {
  const navigate = useNavigate();

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

      profileData = await getUserById(post.userId);

      dispatch({ type: ACTIONS.SET_PROFILE_INFO, payload: profileData });
    } catch (error) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: "Error fetching profile info",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchProfileInfo();
    };
    loadData();
  }, []);

  const { profileInfo, loading } = state;
  
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post">
      <div className="post-header">
        <ProfileIcon
          imageUrl={profileInfo.profilePhoto}
          alt="User"
          className="post-avatar"
        />
        <div
          className="post-info"
          onClick={() => navigate("/" + profileInfo.userName)}
        >
          <span className="post-author">{profileInfo.name}</span>
          <span className="post-author-user">{"@" + profileInfo.userName}</span>
          <span className="post-time">{new Date(post.publishDate.seconds).toLocaleString()}</span>
        </div>
      </div>
      <div className="post-content-container">
        <div className="post-content">
          <p>{post.content}</p>
          {post.media?.image && (
            <img src={post.media.image} alt="Post" className="post-image" />
          )}
          {post.media?.video && (
            <video controls className="post-video">
              <source src={post.media.video} />
            </video>
          )}
        </div>
        <div className="post-actions">
          <span>Comentar {post.comments}</span>
          <span>Repostear {post.shares}</span>
          <span>Me gusta {post.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
