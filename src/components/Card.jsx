import imagen from "../../public/images/fqIKBO06_400x400.jpg";
import "../styles/Components/CardStyles.css";
import { ThreeDotsIconSVG } from "./Images.jsx";
import { IconButton, LargeButton } from "./Buttons";
import { ProfileIcon } from "./ProfileIcon";
const Card = ({
  image = imagen,
  username = "carius",
  usertag = "@carlitos99",
  isFollowed = true,
  isFollowingUser = false,
  customCard = false
}) => {
  return (
    <div id={!customCard ? " card" : "custom_card_container"}>
      <div id={"card_data_container"}>
        <ProfileIcon imageUrl={image} large={false} />
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
        {!customCard && <IconButton
          icon={() =>
            ThreeDotsIconSVG({ width: "26.250px", height: "26.250px" })
          }
        />}
      </div>
    </div>
  );
};

export default Card;
