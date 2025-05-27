import React, { useState } from "react";
import backgroundImage from "../../assets/images/wheres_waldo_img.jpeg";

function TargetBox({ position, magnifierVisible, imageRef }) {
  return (
    <div>
      {magnifierVisible && (
        <div
          className="magnifier"
          style={{
            position: "absolute",
            pointerEvents: "none",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "2px solid #000",
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageRef.current.naturalWidth * 2}px ${
              imageRef.current.naturalHeight * 2
            }px`, // 2x zoom
            backgroundPosition: `-${position.imageX * 2 - 75}px -${
              position.imageY * 2 - 75
            }px`,
            top: position.clientY - 75,
            left: position.clientX - 75,
          }}
        />
      )}
    </div>
  );
}

export default TargetBox;
