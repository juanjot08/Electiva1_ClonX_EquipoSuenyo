import { useNavigate, useParams } from "react-router-dom";
import { getUserInformation } from "../../services/UserService";
import { ColumnContainer } from "../../components/ColumnContainer";
import "./styles/Profile.css";
import { ProfileIcon } from "../../components/ProfileIcon";
import { LargeButton } from "../../components/Buttons";
import Post from "../../components/Post";
import { getPostsByUser } from "../../services/PostService";
import { routes } from "../../constants/routes";

export const ProfileUserPage = () => {
  const { userName } = useParams();

  const profileInfo = getUserInformation(userName);
  let posts = getPostsByUser(userName);

	const navigate = useNavigate();


  return (
    <ColumnContainer widths={["50%", "50%"]}>
      <div className="profile-container">
        <nav className="sticky-navbar">
          <div className="navbar-profile-content">
            <button className="back-button" onClick={() => navigate(routes.home)}>←</button>
            <div className="user-info">
              <h2>{profileInfo.name}</h2>
              <p>{posts.length} posts</p>
            </div>
          </div>
        </nav>

        <div className="profile-header">
          <div className="cover-photo">
            <img
              style={{ width: "100%" }}
              src={profileInfo.coverImage}
              alt=""
            />
          </div>
          <div className="profile-info">
            <div
              className="flex-row"
              style={{
                width: "100%",
                justifyContent: "space-between",
                marginTop: "-50px",
              }}
            >
              <ProfileIcon imageUrl={profileInfo.profilePhoto} large={true} />
              <LargeButton
                label="Editar perfil"
                styleType="secondary"
                customStyles={{
                  height: "40px",
                  width: "150px",
                  marginTop: "50px",
                }}
              />
            </div>
            <div className="profile-details">
              <h1>{profileInfo.name}</h1>
              <p>@{profileInfo.userName}</p>
              <p>
                Se unió en {profileInfo.registerDate.month} de{" "}
                {profileInfo.registerDate.year}
              </p>
              <p>
                <a style={{ cursor: "pointer" }} onClick={() => navigate("following")}>
                  {profileInfo.following.length} Siguiendo
                </a>{" "}
                <a style={{ cursor: "pointer" }} onClick={() => navigate("followers")}>
                  {profileInfo.followers.length} Seguidores
                </a>
              </p>
            </div>
          </div>
        </div>

        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </ColumnContainer>
  );
};
