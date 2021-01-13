import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const TestimonialCard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const testimonials = [
    {
      name: "Praneeta",
      avatar: "./customers/img-3.webp",
      feedback:
        "I was going through a really hard phase of my life dealing with PCOD, Face Acne and Weight Gain issues. The team helped me understand what nutrients my body needs in tracked progress over a period of time. I realized that personalized and flexible nutrition plans have helped to manage by EATING RIGHT.",
    },
    {
      name: "Kritika",
      avatar: "./customers/img-2.webp",
      feedback: `I can eat freely and am convinced that I am giving my body the right foods and the nutrients that it needs.
      Weight loss is a part of my motivation to eat right but it's not the only reason that I am doing this. For me, it's about being healthier. Eating what my body really needs keeps me from being tempted to eat the wrong thing. And fortunately, with the combination of eating right, exercising and generally trying to be healthier, I've also lost weight.`,
    },
    {
      name: "Siddharth",
      avatar: "./customers/img-1.webp",
      feedback:
        "Its an amazing feeling to see the second blood report. I was already feeling better but now I could see the progress! The root cause analysis was a wake up call for me. I became more mindful about the food I was eating. It was cool that the changes weren’t radical and my mother didn’t have to change what was being cooked already.",
    },
  ];

  const back = () =>
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 < 0 ? 2 : prevIndex - 1));

  const forward = () =>
    setCurrentCardIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));

  return (
    <div className="testimonial-card">
      <ArrowBackIosIcon
        style={{ fontSize: 48, color: "white" }}
        onClick={() => back()}
      />
      <img
        src={testimonials[currentCardIndex].avatar}
        alt={testimonials[currentCardIndex].title}
      />
      <p>{'"' + testimonials[currentCardIndex].feedback + '"'}</p>
      <h3>{"-" + testimonials[currentCardIndex].name}</h3>
      <ArrowForwardIosIcon
        style={{ fontSize: 48, color: "white" }}
        onClick={() => forward()}
      />
    </div>
  );
};

export default TestimonialCard;
