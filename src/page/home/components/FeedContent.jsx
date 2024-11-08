import { useEffect, useReducer, useState, useContext } from "react";
import Post from "../../../components/Post.jsx";
import PostInput from "../../../components/PostInput.jsx";
import { getLastPosts } from "../../../infrastructure/firebase/repositories/post.repository.js";
import { AuthContext } from "../../../authentication/contexts/AuthContext";
import "../styles/FeedContainer.css";
import {
  ACTIONS,
  profileReducer,
} from "../../../reducers/profile-info.reducer.js";

export const FeedContent = () => {
  const initialState = {
    profileInfo: null,
    posts: [],
    loading: true,
    error: null,
  };

  const [reFetch, setReFetch] = useState(null);

  const updateData = () => {
    dispatch({ type: ACTIONS.SET_POSTS, payload: [] })
    setReFetch(Date.now());
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const { getLogedUserInfo } = useContext(AuthContext);
  const logedUser = getLogedUserInfo();

  const fetchPosts = async () => {
    try {
      const postsData = await getLastPosts(logedUser.id);
      dispatch({ type: ACTIONS.SET_POSTS, payload: postsData });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: "Error fetching posts" });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [reFetch]);

  const { posts } = state;
  return (
    <div className="feed-container">
      <PostInput reloadAction={() => updateData()} />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};
