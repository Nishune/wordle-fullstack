import React from "react";
import LetterBox from "./LetterBox";
import { GuessRowContainer } from "../../styles/GuessRowStyles";

function GuessRow({ feedback }) {
  return (
    <GuessRowContainer>
      {feedback.map((item, index) => (
        <LetterBox key={index} letter={item.letter} result={item.result} />
      ))}
    </GuessRowContainer>
  );
}

export default GuessRow;
