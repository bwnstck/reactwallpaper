import "./Wallpaper.css";
import React from "react";

export default function Wallpaper({ imgSrc, imgAlt, children }) {
  return (
    <div>
      <img className="wallpaper" src={imgSrc} alt={imgAlt} />
      {children}
    </div>
  );
}
