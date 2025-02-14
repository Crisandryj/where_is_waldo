import React from "react";
import TargetBox from "./TargetBox";
import waldoImage from "../../assets/images/wheres_waldo_img.jpeg";
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
    minHeight: "100vh",
    width: "auto",

    // Add more styles as needed
  };

  if (showTarget !== null) {
    return (
      <>
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
          <img src={waldoImage} alt="" />
        </div>
      </>
    );
  } else {
    return (
      <>
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
          <img src={waldoImage} alt="Where's Waldo?" />
        </div>
      </>
    );
  }
};

export default App;
