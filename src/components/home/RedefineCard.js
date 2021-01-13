import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const RedefineCard = ({ titles }) => {
  return (
    <div className="redefine-cards-container">
      {titles.map((title) => {
        return (
          <div key={title + Math.random()} className="redefine-cards">
            <CloseIcon style={{ fontSize: 48, color: "#53B774" }} />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RedefineCard;
