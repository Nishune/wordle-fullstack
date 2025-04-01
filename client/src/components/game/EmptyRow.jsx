import React from "react";
import LetterBox from "./LetterBox";
import { EmptyRowContainer } from "../../styles/EmptyRowStyles";

function EmptyRow({ length, currentGuess = "", isActive = false }) {
  return (
    <EmptyRowContainer>
      {Array.from({ length }).map((_, index) => (
        <LetterBox
          key={index}
          letter={
            isActive && index < currentGuess.length ? currentGuess[index] : ""
          }
          result="empty"
        />
      ))}
    </EmptyRowContainer>
  );
}

export default EmptyRow;
