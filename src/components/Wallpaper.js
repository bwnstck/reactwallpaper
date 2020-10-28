import "./Wallpaper.css";
import React from "react";

export default function Wallpaper({ imgSrc, imgAlt }) {
  return <img className="wallpaper" src={imgSrc} alt={imgAlt} />;
}
