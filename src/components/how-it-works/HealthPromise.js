import React from "react";
import Title from "../title/Title";
import PromiseCard from "./PromiseCard";
import './health-promise.scss'

const HealthPromise = () => {
  const cards = [
    {
      imgUrl: "./promise/img-1.png",
      title: "Science Based",
      description:
        "To provide results with maximum impact, everything we do has science & technology at its core.",
    },
    {
      imgUrl: "./promise/img-2.png",
      title: "Nutritionists Approved",
      description:
        "Our Clinical nutritionists are available to provide expert advice based on your blood report and health goals",
    },
    {
      imgUrl: "./promise/img-3.png",
      title: "Privacy Protected",
      description:
        "To ensure the confidentiality of your data, we use multiple layers of encryption & access protection. Sova will never sell your data.",
    },
  ];
  return (
    <div className="container">
      <Title title="sova health promise" />
      <div className="promise-card-container">
        {cards.map(({ imgUrl, title, description }) => (
          <PromiseCard
            key={title}
            imgUrl={imgUrl}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthPromise;
