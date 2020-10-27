import "./Wallpaper.css";
import React from "react";

export default function Wallpaper({ children }) {
  return <img className="wallpaper">{children}</img>;
}
