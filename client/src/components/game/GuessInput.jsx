import React, { useState } from "react";

function GuessInput({ wordLength, onMakeGuess, disabled = false }) {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase();
    if (value.length <= wordLength) {
      setCurrentGuess(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentGuess.length !== wordLength) {
      return;
    }

    onMakeGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <form className="guess-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={currentGuess}
        onChange={handleInputChange}
        placeholder={`Enter a ${wordLength}-letter word`}
        maxLength={wordLength}
        disabled={disabled}
        className="guess-input"
        autoFocus
      />
      <button
        type="submit"
        className={`guess-button ${
          currentGuess.length !== wordLength ? "guess-button--disabled" : ""
        }`}
        disabled={currentGuess.length !== wordLength || disabled}
      >
        Guess
      </button>
    </form>
  );
}

export default GuessInput;
