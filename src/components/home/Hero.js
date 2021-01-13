import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>Discover a healthier you</h1>
          <p>
            Get a personalized nutrition program based on your lifestyle, habits
            and blood analysis.
          </p>
          <button>Learn More</button>
        </div>
        <img src="./home_hero_image.webp" alt="home hero" />
      </div>
    </section>
  );
};

export default Hero;
