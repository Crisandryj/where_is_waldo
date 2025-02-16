import React from "react";
import { useRef } from "react";

function Button(props) {
  return (
    <input
      onClick={props.HandleClick}
      type="image"
      alt="Where's waldo?"
      src={props.text}
    />
  );
}
export default Button;
