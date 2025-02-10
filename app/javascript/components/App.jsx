import React from "react";
import TargetBox from "./TargetBox";
import backgroundImage from "../../assets/images/wheres_waldo_img.jpeg";
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";

const App = () => {
  const [showTarget, setShowTarget] = useState("false");

  const handleOnClick = () => {
    if (showTarget == "true") {
      console.log(showTarget);
      setShowTarget("false");
      console.log("active");
    } else {
      console.log("active2s");
      setShowTarget("true");
    }
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "contain", // Adjust background position as needed
    minHeight: "100vh",
    maxWidth: "100%",
    backgroundRepeat: "no-repeat",
    // Add more styles as needed
  };

  if (showTarget == "true") {
    return (
      <div style={styles}>
        <TargetBox />
        <ButtonComponent HandleClick={handleOnClick} />
      </div>
    );
  } else {
    return (
      <div style={styles}>
        <ButtonComponent HandleClick={handleOnClick} />
      </div>
    );
  }
};

export default App;
