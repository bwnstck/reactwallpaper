import "./ImageFavourite.css";
import React from "react";
import LikeButton from "./LikeButton";

export default function ImageFavourite({ imgSrc, imgAlt, handleOnClick }) {
  return (
    <div className={"favouriteImageContainer glow-on-hover"}>
      <img
        className={"favouriteImage "}
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      ></img>
      <LikeButton
        className={"likeButton--favImg"}
        handleOnClick={handleOnClick}
      />
    </div>
  );
}
