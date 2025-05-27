import React from "react";
import TargetBox from "./TargetBox";
import waldoImage from "../../assets/images/wheres_waldo_img.jpeg";
import Char1 from "../../assets/images/Char1.png";
import Char2 from "../../assets/images/Char2.png";
import Char3 from "../../assets/images/Char3.png";
import GreenCheck from "../../assets/images/check.png";
import ButtonComponent from "./ButtonComponent";
import Dropdown from "./DropDown";
import Timer from "./Timer";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const imageRef = useRef(null);
  const [showTarget, setShowTarget] = useState(null);
  const [magnifierVisible, setMagnifierVisible] = useState(false);
  const [position, setPosition] = useState({
    imageX: 0,
    imageY: 0,
    clientX: 0,
    clientY: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [charsPos, setCharsPos] = useState({});
  const [char1IsFound, setChar1IsFound] = useState(true);
  const [char2IsFound, setChar2IsFound] = useState(true);
  const [char3IsFound, setChar3IsFound] = useState(true);

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

  function handleMouseMove(e) {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scaleX = imageRef.current.naturalWidth / rect.width;
    const scaleY = imageRef.current.naturalHeight / rect.height;

    const imageX = x * scaleX;
    const imageY = y * scaleY;

    setPosition({
      imageX,
      imageY,
      clientX: e.clientX,
      clientY: e.clientY,
    });
  }

  return (
    <div
      style={{ position: "relative" }}
      onMouseLeave={() => setMagnifierVisible(false)}
    >
      <div style={styles}></div>
      {showTarget && (
        <TargetBox
          imageRef={imageRef}
          position={position}
          setPosition={setPosition}
          magnifierVisible={magnifierVisible}
        />
      )}
      <img
        ref={imageRef}
        className="mainImg"
        src={waldoImage}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setMagnifierVisible(true)}
        alt="Find Waldo"
      />

      {char1IsFound && (
        <img src={GreenCheck} alt="check" style={checkStyleChar1} />
      )}
      {char2IsFound && (
        <img src={GreenCheck} alt="check" style={checkStyleChar2} />
      )}
      {char3IsFound && (
        <img src={GreenCheck} alt="check" style={checkStyleChar3} />
      )}
      <div className="btns">
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
};

export default App;
