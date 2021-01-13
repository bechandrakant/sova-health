import React from "react";
import Title from "../title/Title";
import TestimonialCard from "./TestimonialCard";
import "./testimonials.scss";

const Testimonials = () => {

  return (
    <div>
      <Title title="what our customers say" />

      <TestimonialCard />
    </div>
  );
};

export default Testimonials;
