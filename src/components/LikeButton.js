import "./LikeButton.css";

import React from "react";
import heartNoFill from "../assets/heart_noFill.svg";
import heartFill from "../assets/heart.svg";

export default function LikeButton({ handleOnClick, className, liked }) {
  const heartButton = liked ? heartFill : heartNoFill;
  return (
    <button className={`likeButton ${className}`} onClick={handleOnClick}>
      <img src={heartButton} alt={"favImg"} />
    </button>
  );
}
