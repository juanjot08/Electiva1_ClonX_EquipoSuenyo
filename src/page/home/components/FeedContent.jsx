import Post from "./Post";
import PostInput from "./PostInput";
import { getPosts } from "../../../services/PostService.js"
import "../styles/FeedContainer.css"

export const FeedContent = () => {

	let posts = getPosts();

  return (
    <div className="feed-container">
      <PostInput />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};
