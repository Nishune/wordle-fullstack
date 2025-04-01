import React from "react";
import LetterBox from "./LetterBox";
import { GuessRowContainer } from "../../styles/GuessRowStyles";

//Feedback prop comes from GameBoard-component
function GuessRow({ feedback }) {
  //Loops through every letter-feedback and renders a Letterbox
  return (
    <GuessRowContainer>
      {feedback.map((item, index) => (
        <LetterBox key={index} letter={item.letter} result={item.result} /> //letter item.letter sens the character to Letterbox, alkso sens in result to chose color/style.
      ))}
    </GuessRowContainer>
  );
}

export default GuessRow;
