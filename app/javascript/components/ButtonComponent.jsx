import React from "react";
import { useRef } from "react";

function Button(props) {
  const btnStyle = {
    height: "55px",
    width: "55px",
    borderStyle: "dashed solid",
  };
  return (
    <input
      onClick={props.HandleClick}
      type={props.type}
      alt={props.text}
      src={props.src}
      style={btnStyle}
    />
  );
}
export default Button;
