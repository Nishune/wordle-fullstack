import React from "react";
import {
  CorrectTile,
  MisplacedTile,
  IncorrectTile,
  EmptyTile,
} from "../../styles/LetterBoxStyles";

//These props (letter & result) comes from GuessRow component.
function LetterBox({ letter, result }) {
  //This function "decides" which tile should be displayed depending on result.
  const renderTile = () => {
    switch (result) {
      case "correct":
        return <CorrectTile>{letter}</CorrectTile>;
      case "misplaced":
        return <MisplacedTile>{letter}</MisplacedTile>;
      case "incorrect":
        return <IncorrectTile>{letter}</IncorrectTile>;
      case "empty":
        return <EmptyTile hasLetter={!!letter}>{letter}</EmptyTile>;
    }
  };
  return renderTile();
}

export default LetterBox;
