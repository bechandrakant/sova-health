import React from "react";
import GoalCard from "./GoalCard";
import "./goals.scss"

const Goals = () => {
  const goals = [
    {
      imgUrl: "./goals/img-1.png",
      title: "Blood biomarker analysis",
      description:
        "Get a scientific explanation for how specific biomarkers affect your body and what foods can be used to improve them",
    },
    {
      imgUrl: "./goals/img-2.png",
      title: "One on one Lifestyle analysis",
      description:
        "Discover how your habits are affecting your health and immunity with consultations over video/ audio calls.",
    },
    {
      imgUrl: "./goals/img-3.png",
      title: "Weekly consultation",
      description:
        "Discuss your goals/plans and build healthy habits with your nutritionists to boost your immunity.",
    },
    {
      imgUrl: "./goals/img-4.png",
      title: "Superfood library",
      description:
        "Identify your superfoods as per your blood biomarkers and take the guesswork out of eating right",
    },
    {
      imgUrl: "./goals/img-5.png",
      title: "24 / 7 Support",
      description:
        "Get real time feedback on your food decisions. Questions are answered by your nutritionist.",
    },
    {
      imgUrl: "./goals/img-6.png",
      title: "Sova community",
      description:
        "Get access to network of experts (nutritionists, chefs, fitness trainers & immunologists) with daily health tips, easy recipes, immunity boosting foods & lifestyle recommendations.",
    },
  ];
  return (
    <div class="goals">
      {goals.map(({ imgUrl, title, description }) => (
        <GoalCard
          key={imgUrl}
          imgUrl={imgUrl}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default Goals;
