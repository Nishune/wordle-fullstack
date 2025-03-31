import { Button, Paper, TextField, Typography, Box, Grid } from "@mui/material";
import React, { useState } from "react";

function GameBoard({
  wordLength,
  guesses,
  isGameOver,
  message,
  onMakeGuess,
  onResetGame,
}) {
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

  const getLetterColor = (result) => {
    switch (result) {
      case "correct":
        return "#6aaa64";
      case "misplaced":
        return "#c9b458";
      case "incorrect":
        return "#787c7e";
      default:
        return "inherit";
    }
  };

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h6" align="center" gutterBottom>
          {message}
        </Typography>
      </Box>

      <Box mb={4}>
        {guesses.map((guess, guessIndex) => (
          <Grid
            container
            key={guessIndex}
            spacing={1}
            justifyContent="center"
            sx={{ mb: 1 }}
          >
            {guess.feedback.map((item, letterIndex) => (
              <Grid item key={letterIndex}>
                <Paper
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: getLetterColor(item.result),
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.letter}
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}

        {Array.from({ length: Math.max(0, 6 - guesses.length) }).map(
          (_, rowIndex) => (
            <Grid
              container
              key={`empty-${rowIndex}`}
              spacing={1}
              justifyContent="center"
              sx={{ mb: 1 }}
            >
              {Array.from({ length: wordLength }).map((_, colIndex) => (
                <Grid item key={colIndex}>
                  <Paper
                    sx={{
                      width: 50,
                      height: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #d3d6da",
                    }}
                  >
                    {rowIndex === 0 && colIndex < currentGuess.length
                      ? currentGuess[colIndex]
                      : ""}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )
        )}
      </Box>

      {!isGameOver ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TextField
            value={currentGuess}
            onChange={handleInputChange}
            placeholder={`Enter a ${wordLength}-letter word`}
            variant="outlined"
            slotProps={{
              input: {
                maxLength: wordLength,
                style: { textTransform: "uppercase" },
              },
            }}
            sx={{ mr: 1, width: "60%" }}
            disabled={isGameOver}
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={currentGuess.length !== wordLength || isGameOver}
          >
            Guess
          </Button>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button onClick={onResetGame} variant="contained" color="secondary">
            {" "}
            Play Again
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default GameBoard;
