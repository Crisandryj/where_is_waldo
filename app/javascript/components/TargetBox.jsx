import React, { useState } from "react";
import backgroundImage from "../../assets/images/wheres_waldo_img.jpeg";

function TargetBox() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const styles = {
    borderRadius: "100px",
    position: "absolute",
    left: position.x,
    top: position.y,
    width: "150px",
    height: "150px",
    border: "2px dotted",
    backgroundColor: "",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '(width * 3) + "px " + (height * 3) + "px"',
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

  return (
    <div
      className="target-box"
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      style={styles}
    >
      Drag me!
    </div>
  );
}

export default TargetBox;
