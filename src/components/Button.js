import "./Button.css";

import React from "react";

export default function Button(props) {
  return (
    <button
      className={`button ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
}
