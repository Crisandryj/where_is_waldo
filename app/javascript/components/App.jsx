import React from "react";
import TargetBox from "./TargetBox";
import backgroundImage from "../../assets/images/wheres_waldo_img.jpeg";
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";

const App = () => {
  const [showTarget, setShowTarget] = useState(null);

  const handleCharOneClick = () => {
    if (showTarget != "Character1") {
      setShowTarget("Character1");
    } else {
      setShowTarget(null);
    }
  };

  const handleCharTwoClick = () => {
    if (showTarget != "Character2") {
      setShowTarget("Character2");
    } else {
      setShowTarget(null);
    }
  };

  const handleCharThreeClick = () => {
    if (showTarget != "Character3") {
      setShowTarget("Character3");
    } else {
      setShowTarget(null);
    }
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    overflowX: "auto",
    minHeight: "100vh",
    width: "auto",
    backgroundRepeat: "no-repeat",

    // Add more styles as needed
  };

  if (showTarget !== null) {
    return (
      <div style={styles}>
        <TargetBox />
        <ButtonComponent
          HandleClick={handleCharOneClick}
          text="Character One"
        />
        <ButtonComponent
          HandleClick={handleCharTwoClick}
          text="Character Two"
        />
        <ButtonComponent
          HandleClick={handleCharThreeClick}
          text="Character Three"
        />
      </div>
    );
  } else {
    return (
      <div style={styles}>
        <ButtonComponent
          HandleClick={handleCharOneClick}
          text="Character One"
        />
        <ButtonComponent
          HandleClick={handleCharOneClick}
          text="Character Two"
        />
        <ButtonComponent
          HandleClick={handleCharOneClick}
          text="Character Three"
        />
      </div>
    );
  }
};

export default App;
