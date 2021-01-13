import React from "react";
import RedefineCard from "./RedefineCard"
import Title from '../title/Title'
import './redefine.scss'

const Redefine = () => {
  const redefineTitles = [
    "No Diet Charts",
    "No Restrictive Diets",
    "No Staying Hungry",
  ]

  return (
    <section className="redefine">
      <div className="container">
        <Title title="redefine your relationship with food" />
        <RedefineCard titles={redefineTitles}/>
      </div>
    </section>
  );
};

export default Redefine;
