import React from "react";
import {
  CorrectTile,
  MisplacedTile,
  IncorrectTile,
  EmptyTile,
} from "../../styles/LetterBoxStyles";
function LetterBox({ letter, result }) {
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
