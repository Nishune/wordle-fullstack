import React from "react";
import { Box, Paper, Container, Typography } from "@mui/material";
import GuessRow from "./GuessRow";
import EmptyRow from "./EmptyRow";
import GuessInput from "./GuessInput";
import GameMessage from "./GameMessage";
import PlayAgainButton from "./PlayAgainButton";

function GameBoard({
  wordLength,
  guesses,
  isGameOver,
  message,
  onMakeGuess,
  onResetGame,
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 4,
        borderRadius: 2,
        maxWidth: 600,
        width: "100%",
        margin: "0 auto",
        backgroundColor: "background.paper",
        border: "1px solid rgba(255, 152, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <GameMessage message={message} />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        {guesses.map((guess, index) => (
          <GuessRow key={index} feedback={guess.feedback} />
        ))}

        {guesses.length < 6 && <EmptyRow length={wordLength} isActive={true} />}

        {Array.from({ length: Math.max(0, 5 - guesses.length) }).map(
          (_, index) => (
            <EmptyRow key={`empty-${index}`} length={wordLength} />
          )
        )}
      </Box>

      <Box sx={{ width: "100%", mt: 2 }}>
        {!isGameOver ? (
          <GuessInput
            wordLength={wordLength}
            onMakeGuess={onMakeGuess}
            disabled={isGameOver}
          />
        ) : (
          <PlayAgainButton onResetGame={onResetGame} />
        )}
      </Box>
    </Paper>
  );
}

export default GameBoard;
