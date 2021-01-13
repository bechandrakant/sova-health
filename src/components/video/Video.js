import React from "react";
import "./video.scss";

const Video = () => {
  return (
    <div className="container center video-container">
      <iframe
        title="promo-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-3O3TVzbEJ8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
