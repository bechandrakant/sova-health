import React from "react";
import Title from "../title/Title";
import "./how-it-works.scss";
import HealthPromise from "./HealthPromise";
import TestimonialCard from "../testimonials/TestimonialCard";
import Hero from './Hero'

const HowItWorks = () => {
  return (
    <div>
      <Hero />
      <HealthPromise />
      <div style={{ backgroundColor: "#1E2C4C", paddingBottom: 20 }}>
        <div className="container how-it-works">
          <Title
            title="WE LET THE RESULTS SPEAK FOR THEMSELVES HERE’S WHAT OUR PAST USERS HAVE TO SAY:"
            white={true}
          />
        </div>
        <hr />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default HowItWorks;
