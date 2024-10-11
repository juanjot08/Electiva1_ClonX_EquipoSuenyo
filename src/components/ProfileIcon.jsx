import PropTypes from "prop-types";
import "../styles/components/ProfileIcon.css";

export const ProfileIcon = ({ imageUrl, large = false }) => {
  return (
    <div
      className="profile-image-container"
      style={
        large
          ? { width: "140px", height: "140px" }
          : { width: "38px", height: "38px" }
      }
    >
      <img src={imageUrl} alt="" className="profile-image" />
    </div>
  );
};

ProfileIcon.propTypes = {
  imageUrl: PropTypes.string,
  large: PropTypes.bool,
};
