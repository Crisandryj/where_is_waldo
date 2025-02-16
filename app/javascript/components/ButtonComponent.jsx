import React from "react";
import { useRef } from "react";

function Button(props) {
  const btnStyle = {
    width: "50px",
    borderStyle: "dashed solid",
  };
  return (
    <input
      onClick={props.HandleClick}
      type="image"
      alt="Where's waldo?"
      src={props.text}
      style={btnStyle}
    />
  );
}
export default Button;
