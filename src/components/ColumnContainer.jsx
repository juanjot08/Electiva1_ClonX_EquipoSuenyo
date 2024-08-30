import React from "react";
import PropTypes from "prop-types";
import "../styles/ColumnContainer.css"

export const ColumnContainer = ({ gaps, children }) => {
  return (
    <div className="column-container">
      {React.Children.map(children, (child, index) => (
        <div
          className="column-item"
          style={{
            marginLeft: gaps[index] || 0
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
