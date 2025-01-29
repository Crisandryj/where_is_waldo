import React, { useState } from "react";

function TargetBox() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    console.log("is dragging");
    console.log(newPosition);
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
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "100px",
        height: "100px",
        border: "2px dotted",
        backgroundColor: "",
      }}
    >
      Drag me!
    </div>
  );
}

export default TargetBox;
