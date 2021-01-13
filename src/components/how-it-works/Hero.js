import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hiw-hero">
      <div className="container">
        <div>
          <h1>Truly Personalized Nutrition starts with a Blood-Test</h1>
          <p>
            At home collection of blood sample &amp; analysis for 60+
            parameters. Based on your health reports, our nutritionists will
            guide you with nutritional &amp; lifestyle advice.
          </p>
          <button>View Our Plans</button>
        </div>
        <img src="./hiw_banner.webp" alt="how it works hero" />
      </div>
    </section>
  );
};

export default Hero;
