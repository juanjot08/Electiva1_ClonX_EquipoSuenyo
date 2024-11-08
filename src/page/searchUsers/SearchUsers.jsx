import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUsersByName } from "../../infrastructure/firebase/repositories/user.repository";
import { Card } from "../../components/Card";
import NotFoundMessage from "../../components/NotFound";
import { routes } from "../../constants/routes";

export const SearchUsers = () => {
  const { userName } = useParams(); // Obtiene el nombre de usuario desde los parámetros
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const result = await getUsersByName(userName);
        if (result.length === 0) {
          setError(true);
        } else {
          setUsers(result);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <NotFoundMessage />;
  }

  return (
    <div>
      <nav className="sticky-navbar">
        <div className="navbar-profile-content">
          <button className="back-button" onClick={() => navigate(routes.home)}>
            ←
          </button>
          <div className="user-info">
            <h2>Resultados para: &quot;{userName}&quot;</h2>
          </div>
        </div>
      </nav>
      <br />
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "15px" }}>
          <Card
            image={user.profilePhoto}
            username={user.name}
            usertag={user.userName}
            fet
          />
        </div>
      ))}
    </div>
  );
};