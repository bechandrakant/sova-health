import React from "react";
import "./title.scss";

const Title = ({ title, white }) => {
  return (
    <div className="title-container">
      <h1 style={{ color: white ? "white" : "#1e2c4c" }}>{title}</h1>
    </div>
  );
};

export default Title;
