import { LargeButton } from "../../../components/Buttons";
import { ProfileIcon } from "../../../components/ProfileIcon";
import "../styles/PostInput.css"

const PostInput = () => {
  //TODO: Change profile picture to ProfileIcon Component
  return (
    <div className="post-input">
      <div className="input-area">
        <ProfileIcon imageUrl="https://random-image-pepebigotes.vercel.app/api/random-image" alt="User" className="user-avatar" />
        <input type="text" placeholder="¿Qué está pasando?!" className="postinput-text-content"/>
      </div>
      <div className="postinput-actions">
        <LargeButton label="Postear" />
      </div>
    </div>
  );
};

export default PostInput;
