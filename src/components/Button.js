import "./Button.css";

import React from "react";

export default function Button(props) {
  return (
    <a href={props.href}>
      <button className={`button ${props.className}`} onClick={props.onClick}>
        {props.buttonText}
      </button>
    </a>
  );
}
