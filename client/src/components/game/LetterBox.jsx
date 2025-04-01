import React from "react";

function LetterBox({ letter, result }) {
  const getLetterClass = (result) => {
    switch (result) {
      case "correct":
        return "letter-box--correct";
      case "misplaced":
        return "letter-box--misplaced";
      case "incorrect":
        return "letter-box--incorrect";
      case "empty":
        return "letter-box-empty";
    }
  };

  return <div className={`letter-box ${getLetterClass(result)}`}>{letter}</div>;
}

export default LetterBox;
