import React from "react";
import PropTypes from "prop-types";
import "../styles/Components/ColumnContainer.css";

export const ColumnContainer = ({ gaps = [], widths = [], children }) => {
  const gridTemplateColumns = widths.length
    ? widths
        .map((width) => (typeof width === "number" ? `${width}px` : width))
        .join(" ")
    : `repeat(${children.length}, 1fr)`; // Por defecto usa un ancho igual para todas las columnas

  return (
    <div
      className={`column-container`}
      style={{
        gridTemplateColumns,
        gap: gaps.length ? gaps.join(" ") : "0"
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          className="column-item"
          style={{
            marginLeft: gaps[index] || 0,
            width: widths[index] || "auto",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};