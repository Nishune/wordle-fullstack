import React from "react";
import LetterBox from "./LetterBox";

function GuessRow({ feedback }) {
  return (
    <div className="guess-row">
      {feedback.map((item, index) => (
        <LetterBox key={index} letter={item.letter} result={item.result} />
      ))}
    </div>
  );
}

export default GuessRow;
