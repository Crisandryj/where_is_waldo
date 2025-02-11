import React from "react";
import { useRef } from "react";

function Button(props) {
  return <button onClick={props.HandleClick}>{props.text}</button>;
}
export default Button;
