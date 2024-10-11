import imagen from "/images/fqIKBO06_400x400.jpg";
import "./CardStyles.css";
import { ThreeDotsIconSVG } from "../../../components/Images";
import { IconButton, LargeButton } from "../../../components/Buttons";
import { ProfileIcon } from "../../../components/ProfileIcon";
const Card = ({
  image = imagen,
  username = "carius",
  usertag = "@carlitos99",
  isFollowed = true,
  isFollowingUser = false,
}) => {
  return (
    <div id="card">
      <div id="card_data_container">
        <ProfileIcon imageUrl={imagen} large={false} />
        <div className="card_text_container">
          <span className="card_username_text">{username}</span>
          <span>
            {usertag}
            {isFollowingUser && <span id="card_followed_state">Te sigue</span>}
          </span>
        </div>
      </div>

      <div id="card_actions">
        <LargeButton
          label={isFollowed ? "Siguiendo" : "Seguir"}
          styleType="secondary"
          customClass="card_largebutton_text"
        />
        <IconButton
          icon={() =>
            ThreeDotsIconSVG({ width: "26.250px", height: "26.250px" })
          }
        />
      </div>
    </div>
  );
};

export default Card;
