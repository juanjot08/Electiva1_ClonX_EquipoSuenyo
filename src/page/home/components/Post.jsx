import { ProfileIcon } from "../../../components/ProfileIcon";
import "../styles/Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <ProfileIcon
          imageUrl={post.userAvatar}
          alt="User"
          className="post-avatar"
        />
        <div className="post-info">
          <span className="post-author">{post.authorName}</span>
          <span className="post-author-user">{post.authorUser}</span>
          <span className="post-time">{post.time}</span>
        </div>
      </div>
      <div className="post-content-container">
        <div className="post-content">
          <p>{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post" className="post-image" />
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
