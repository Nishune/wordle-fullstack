import React from "react";
import { Box, Paper } from "@mui/material";
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
      sx={(theme) => ({
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        maxWidth: 600,
        width: "100%",
        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255, 152, 0, 0.2)"
            : "rgba(0, 0, 0, 0.1)"
        }`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(3),
      })}
    >
      <GameMessage message={message} />

      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(2),
          marginBottom: theme.spacing(2),
        })}
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

      <Box
        sx={{
          width: "100%",
          marginTop: "16px",
        }}
      >
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
