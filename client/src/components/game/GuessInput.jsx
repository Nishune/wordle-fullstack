import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        width: "100%",
        gap: 2,
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        value={currentGuess}
        onChange={handleInputChange}
        placeholder={`Enter a ${wordLength}-letter word`}
        disabled={disabled}
        variant="outlined"
        autoFocus
        inputProps={{
          maxLength: wordLength,
          style: {
            textTransform: "uppercase",
            fontSize: "1.1rem",
            letterSpacing: "0.1rem",
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={currentGuess.length !== wordLength || disabled}
        sx={{
          py: 1.5,
          px: 3,
          textTransform: "none",
          fontWeight: "bold",
        }}
        endIcon={<Send />}
      >
        Guess
      </Button>
    </Box>
  );
}

export default GuessInput;
