import "./Wallpaper.css";
import React from "react";

export default function Wallpaper({ imgSrc, children }) {
  return (
    <img className="wallpaper" src={imgSrc}>
      {children}
    </img>
  );
}
