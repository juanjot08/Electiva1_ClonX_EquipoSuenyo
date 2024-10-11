import { ProfileIcon } from "./ProfileIcon";
import "../styles/Components/Post.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {

  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post-header">
        <ProfileIcon
          imageUrl={post.userAvatar}
          alt="User"
          className="post-avatar"
        />
        <div className="post-info" onClick={() => navigate("/"+post.authorUser)}>
          <span className="post-author">{post.authorName}</span>
          <span className="post-author-user">{"@"+post.authorUser}</span>
          <span className="post-time">{post.time}</span>
        </div>
      </div>
      <div className="post-content-container">
        <div className="post-content">
          <p>{post.content}</p>
          {post.media.image && (
            <img src={post.media.image} alt="Post" className="post-image" />
          )}
          {post.media.video && (
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
