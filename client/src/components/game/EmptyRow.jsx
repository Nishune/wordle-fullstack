import React from "react";
import LetterBox from "./LetterBox";

function EmptyRow({ length, currentGuess = "", isActive = false }) {
  return (
    <div className="empty-row">
      {Array.from({ length }).map((_, index) => (
        <LetterBox
          key={index}
          letter={
            isActive && index < currentGuess.length ? currentGuess[index] : ""
          }
          result="empty"
        />
      ))}
    </div>
  );
}
export default EmptyRow;
