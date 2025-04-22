import React from "react";
import TargetBox from "./TargetBox";
import waldoImage from "../../assets/images/wheres_waldo_img.jpeg";
import Char1 from "../../assets/images/Char1.png";
import Char2 from "../../assets/images/Char2.png";
import Char3 from "../../assets/images/Char3.png";
import GreenCheck from "../../assets/images/check.png";
import ButtonComponent from "./ButtonComponent";
import { useState, useEffect } from "react";

const App = () => {
  const [showTarget, setShowTarget] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [charsPos, setCharsPos] = useState({});
  const [char1IsFound, setChar1IsFound] = useState(false);
  const [char2IsFound, setChar2IsFound] = useState(false);
  const [char3IsFound, setChar3IsFound] = useState(false);

  const handleCharOneClick = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/characters", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => setCharsPos(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  function isWithin15(num, target) {
    return num >= target - 15 && num <= target + 15;
  }

  const handleSubmission = () => {
    switch (showTarget) {
      case "Character1":
        if (
          isWithin15(charsPos[0].x, position.x) &&
          isWithin15(charsPos[0].y, position.y)
        ) {
          console.log("got em");
          setChar1IsFound(true);
          console.log(char1IsFound);
        } else {
          console.log("try again");
        }
        break;
      case "Character2":
        if (
          isWithin15(charsPos[1].x, position.x) &&
          isWithin15(charsPos[1].y, position.y)
        ) {
          console.log("got em");
          setChar2IsFound(true);
          console.log(char2IsFound);
        } else {
          console.log("try again");
        }
        break;
      case "Character3":
        if (
          isWithin15(charsPos[2].x, position.x) &&
          isWithin15(charsPos[2].y, position.y)
        ) {
          setChar3IsFound(true);
        } else {
          console.log("try again 3 ");
        }
        break;
      default:
    }
  };

  const styles = {
    display: "inline-block",
    position: "relative",
  };

  const btnStyle = {
    border: "solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    position: "absolute",
    left: "10px",
    top: "55px",
  };
  const checkStyleChar1 = {
    position: "relative",
    left: "845px",
    bottom: "850px",
  };

  const checkStyleChar2 = {
    position: "relative",
    right: "-700px",
    bottom: "1166px",
  };

  const checkStyleChar3 = {
    position: "relative",
    right: "-2137px",
    bottom: "1212px",
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  if (showTarget !== null) {
    return (
      <div style={styles}>
        <TargetBox position={position} setPosition={setPosition} />
        <img src={waldoImage} alt="" />
        {char1IsFound && (
          <img src={GreenCheck} alt="check" style={checkStyleChar1} />
        )}
        {char2IsFound && (
          <img src={GreenCheck} alt="check" style={checkStyleChar2} />
        )}
        {char3IsFound && (
          <img src={GreenCheck} alt="check" style={checkStyleChar3} />
        )}
        <div style={btnStyle}>
          <ButtonComponent
            HandleClick={handleSubmission}
            text={"Submit"}
            src={Char1}
            type={"button"}
          />
          <ButtonComponent
            HandleClick={handleCharOneClick}
            text={Char1}
            src={Char1}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharTwoClick}
            text={Char2}
            src={Char2}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharThreeClick}
            text={Char3}
            src={Char3}
            type={"image"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div style={styles}>
        <img src={waldoImage} alt="Where's Waldo?" />
        {char1IsFound && (
          <img src={GreenCheck} alt="check" style={checkStyleChar1} />
        )}
        {char2IsFound && (
          <img src={GreenCheck} alt="check" style={checkStyleChar2} />
        )}
        {char3IsFound && (
          <img src={GreenCheck} alt="check" style={checkStyleChar3} />
        )}
        <div style={btnStyle}>
          <ButtonComponent
            HandleClick={handleCharOneClick}
            text={Char1}
            src={Char1}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharTwoClick}
            text={Char2}
            src={Char2}
            type={"image"}
          />
          <ButtonComponent
            HandleClick={handleCharThreeClick}
            text={Char3}
            src={Char3}
            type={"image"}
          />
        </div>
      </div>
    );
  }
};

export default App;
