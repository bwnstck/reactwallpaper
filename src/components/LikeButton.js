import "./LikeButton.css";

import React from "react";

export default function LikeButton({ handleOnClick, className }) {
  return (
    <button className={`likeButton ${className}`} onClick={handleOnClick}>
      ❤️
    </button>
  );
}
