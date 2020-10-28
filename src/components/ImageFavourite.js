import "./ImageFavourite.css";
import React from "react";

export default function ImageFavourite(imgSrc, imgAlt) {
  return (
    <div className={"favouriteImageContainer"}>
      <img className={"favouriteImage"} src={imgSrc} alt={imgAlt}></img>;
      <span className="imgAlt">{imgAlt}</span>
    </div>
  );
}
