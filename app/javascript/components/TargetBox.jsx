import React, { useState } from "react";
import backgroundImage from "../../assets/images/wheres_waldo_img.jpeg";

function TargetBox() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const styles = {
    borderRadius: "50%",
    position: "absolute",
    left: position.x,
    top: position.y,
    width: "50px",
    height: "50px",
    border: "3px solid #000",
    backgroundColor: "",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: `left -${position.x}px top -${position.y}px `,
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const newPosition = {
      x: e.clientX - e.target.offsetWidth / 2,
      y: e.clientY - e.target.offsetHeight / 2,
    };
    setPosition(newPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  console.log(position);
  return (
    <div
      className="target-box"
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      style={styles}
    ></div>
  );
}

export default TargetBox;
