import imagen from "/images/fqIKBO06_400x400.jpg";
import "../styles/Components/CardStyles.css";
import { ThreeDotsIconSVG } from "./Images";
import { FollowButton, IconButton } from "./Buttons";
import { ProfileIcon } from "./ProfileIcon";
import { useNavigate, useParams } from "react-router-dom";

export const Card = ({
  image = imagen,
  username = "carius",
  usertag = "@carlitos99",
  currentId,
  targetId,
  isFollowingUser = false,
  reFetchFunction = () => {},
}) => {
  const { userName } = useParams();
  const navigate = useNavigate();

  return (
    <div id="card">
      <div id="card_data_container">
        <ProfileIcon imageUrl={image} large={false} />
        <div className="card_text_container">
          <span
            className="card_username_text"
            onClick={() => navigate("/" + userName)}
          >
            {username}
          </span>
          <span>
            @{usertag}
            {isFollowingUser && <span id="card_followed_state">Te sigue</span>}
          </span>
        </div>
      </div>

      <div id="card_actions">
        <FollowButton
          currentUser={currentId}
          targetUser={targetId}
          reFetchFuncion={() => reFetchFunction()}
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
