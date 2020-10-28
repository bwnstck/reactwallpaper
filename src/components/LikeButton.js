import "./LikeButton.css";

import React from "react";

export default function LikeButton({ handleOnClick }) {
  return (
    <button className="likeButton" onClick={handleOnClick}>
      ❤️
    </button>
  );
}
