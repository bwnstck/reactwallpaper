import "./ImageFavourite.css";
import React from "react";
import LikeButton from "./LikeButton";

export default function ImageFavourite({ imgSrc, imgAlt }) {
  return (
    <div className={"favouriteImageContainer"}>
      <img
        className={"favouriteImage"}
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      ></img>
      <LikeButton
        className={"likeButton--favImg"}
        handleOnClick={() => {
          // localStorage.setItem("favorites", JSON.stringify([imgObj]));
        }}
      />
    </div>
  );
}
