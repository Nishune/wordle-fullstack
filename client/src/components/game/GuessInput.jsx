import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import {
  GuessInputForm,
  GuessTextField,
  GuessButton,
} from "../../styles/GuessInputStyles";

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
    <GuessInputForm component="form" onSubmit={handleSubmit}>
      <GuessTextField
        fullWidth
        value={currentGuess}
        onChange={handleInputChange}
        placeholder={`Enter a ${wordLength}-letter word`}
        disabled={disabled}
        variant="outlined"
        autoFocus
        inputProps={{
          maxLength: wordLength,
        }}
      />

      <GuessButton
        type="submit"
        variant="contained"
        color="primary"
        disabled={currentGuess.length !== wordLength || disabled}
        endIcon={<Send />}
      >
        Guess
      </GuessButton>
    </GuessInputForm>
  );
}

export default GuessInput;
