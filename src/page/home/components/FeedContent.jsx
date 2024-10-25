import Post from "../../../components/Post.jsx";
import PostInput from "../../../components/PostInput.jsx";
import { getPosts } from "../../../services/posts/PostService.js"
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
