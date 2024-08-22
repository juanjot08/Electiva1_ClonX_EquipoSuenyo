import "../styles/Cards.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const HorizontalCard = ({ link, height, children }) => {
  return (
    <div className={"card " + (link != null ? "clickable" : "")} style={height != null ? {height: height} : {height: "fit-content"}}>
      {children}
    </div>
  );
};

HorizontalCard.propTypes = {
  link: PropTypes.string,
  height: PropTypes.string | PropTypes.number,
  children: PropTypes.element.isRequired
};

function useNavigateToRoute(link) {
  const navigate = useNavigate(); // TODO: Esto podría estar en una clase de metodos de orden mayor
  navigate(link);
}
