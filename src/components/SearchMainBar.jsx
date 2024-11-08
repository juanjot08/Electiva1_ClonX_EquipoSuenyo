import { useState } from "react";
import "../styles/Components/SearchMainBar.css";
import { SearchIconSVG } from "./Images";
import { useNavigate } from "react-router-dom";

export const SearchMainBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm) {
      navigate(`search/${searchTerm}`);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="search-icon">{SearchIconSVG({})}</div>
    </div>
  );
};