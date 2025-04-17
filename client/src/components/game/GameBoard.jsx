import React from "react";
import { Box, Paper } from "@mui/material";
import GuessRow from "./GuessRow";
import EmptyRow from "./EmptyRow";
import GuessInput from "./GuessInput";
import GameMessage from "./GameMessage";
import PlayAgainButton from "./PlayAgainButton";
import ScoreSubmit from "./ScoreSubmit";

function GameBoard({
  wordLength, //prop from gameState in homepage
  guesses, //prop from gameState in homepage
  isGameOver, //prop from gameState in homepage
  message, //prop from gameState in homepage
  onMakeGuess, //function in homepage
  onResetGame, //function in homepage
  gameId, //prop from gameState.gameId in homepage, used for saving score
  isWon, //prop from gameState.isWon in homepage, determines if player won
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
      {/* Shows the game message, like "guess the word" */}
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
        {/* Loops through all guesses and creates a guessrow  */}
        {guesses.map((guess, index) => (
          <GuessRow key={index} feedback={guess.feedback} />
        ))}

        {/* The active row, where the next guess will be displayed when the user subits a guess.  */}
        {guesses.length < 6 && <EmptyRow length={wordLength} isActive={true} />}

        {/* Creates the remaining rows thats left under the active row */}

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
            wordLength={wordLength} // The length of the word controls the max length on the input
            onMakeGuess={onMakeGuess} // Function which gets called when a guess is done
            disabled={isGameOver} // disable input when game is over
          />
        ) : isWon ? (
          <ScoreSubmit gameId={gameId} onResetGame={onResetGame} />
        ) : (
          <PlayAgainButton onResetGame={onResetGame} />
        )}
      </Box>
    </Paper>
  );
}

export default GameBoard;
