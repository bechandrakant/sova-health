import React from "react";
import PR from "../pr/PR";
// import Video from "../video/Video";
import { getPrData } from "../../utils/API";
import "./home.scss";
import Hero from "./Hero";
import Redefine from "./Redefine";
import HealthGoals from "./HealthGoals";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  const renderPR = () => {
    return getPrData().map((pr) => (
      <PR key={pr.images + Math.random()} title={pr.title} images={pr.images} />
    ));
  };

  return (
    <div>
      <Hero />
      <main>
        <Redefine />
        <HealthGoals />
        <Testimonials />
      </main>
      {/* <Video /> */}
      {renderPR()}
    </div>
  );
};

export default Home;
