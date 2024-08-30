import PropTypes from "prop-types";
import "../styles/ProfileIcon.css"

export const ProfileIcon = ({imageUrl}) => {
	return (
		<div className="profile-image-container">
			<img src={imageUrl} alt="" className="profile-image" />
		</div>
	);
};

ProfileIcon.propTypes = {
	imageUrl: PropTypes.string
}