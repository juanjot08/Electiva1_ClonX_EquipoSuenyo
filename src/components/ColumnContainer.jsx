import React from "react";
import PropTypes from "prop-types";
import "../styles/ColumnContainer.css"

export const ColumnContainer = ({ gaps, children, customClass }) => {
  return (
    <div className={`column-container ${customClass}`}>
      {React.Children.map(children, (child, index) => (
        <div
          className="column-item"
          style={{
            marginLeft: gaps[index] || 0,
            width: "auto"
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

ColumnContainer.propTypes = {
  children: PropTypes.array.isRequired,
  gaps: PropTypes.array
};
