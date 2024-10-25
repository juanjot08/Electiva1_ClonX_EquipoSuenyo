import { useState } from "react";
import Card from "./Components/Card";
import { RectangleButton } from "../../components/Buttons";
import "./Follow.css";
import { useNavigate, useParams } from "react-router-dom";
import { ColumnContainer } from "../../components/ColumnContainer";
import { getUserInformation } from "../../services/users/UserService";

export const Follow = ({ rute }) => {
  const [displayList, setDisplayList] = useState(rute || "following");
  const {userName} = useParams();

  const profileInfo = getUserInformation(userName);

  const navigate = useNavigate();
  
  return (
    <ColumnContainer widths={["50%", "50%"]}>
      <section className="follow-container">
        <nav className="sticky-navbar">
          <div className="navbar-profile-content">
            <button className="back-button" onClick={() => navigate("/"+userName)}>←</button>
            <div className="user-info">
              <h2>{profileInfo.name}</h2>
            </div>
          </div>
        </nav>
        <nav className="follow-nav">
          <RectangleButton
            label="Seguidores"
            fn={() => setDisplayList("followers")}
          />
          <RectangleButton
            label="Seguidos"
            fn={() => setDisplayList("following")}
          />
        </nav>
        <div>
          {displayList === "following"
            ? profileInfo.following.map((item) => {
                return (
                  <Card
                    image={item.image}
                    isFollowed={item.isFollowed}
                    username={item.userName}
                    usertag={item.userTag}
                  />
                );
              })
            : profileInfo.followers.map((item) => {
                return (
                  <Card
                    image={item.image}
                    isFollowed={item.isFollowed}
                    username={item.userName}
                    usertag={item.userTag}
                    isFollowingUser={item.isFollowing}
                  />
                );
              })}
        </div>
      </section>
    </ColumnContainer>
  );
};
