import React from "react";
import { useRef } from "react";

function Button(props) {
  return <button onClick={props.HandleClick}> Click Me!</button>;
}
export default Button;
