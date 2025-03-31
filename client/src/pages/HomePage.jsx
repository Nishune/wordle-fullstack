import React, { useState } from "react";
import { Typography, Box, Paper, CircularProgress, Alert } from "@mui/material";
import GameSettings from "../components/GameSettings";
import GameBoard from "../components/GameBoard";

function HomePage() {
  const [gameSettings, setGameSettings] = useState({
    wordLength: 5,
    uniqueLetters: false,
  });

  const [gameState, setGameState] = useState({
    isActive: false,
    gameId: null,
    wordLength: 0,
    guesses: [],
    isGameOver: false,
    word: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startGame = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/game/new?length=${gameSettings.wordLength}&unique=${gameSettings.uniqueLetters}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Could not start the game at this time.."
        );
      }
      const data = await response.json();

      setGameState({
        isActive: true,
        gameId: data.gameId,
        wordLength: data.wordLength,
        guesses: [],
        isGameOver: false,
        word: null,
        message: "New game started! Make a guess..",
      });

      console.log("Game started with ID:", data.gameId);
    } catch (error) {
      console.error("Error starting game:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const makeGuess = async (guess) => {
    if (!gameState.isActive || gameState.isGameOver) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`/api/game/${gameState.gameId}/guess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guess }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Something went wrong with your guess, try again.."
        );
      }
      const data = await response.json();

      setGameState((prevState) => ({
        ...prevState,
        guesses: [...prevState.guesses, { guess, feedback: data.feedback }],
        isGameOver: data.isGameOver || false,
        word: data.word || null,
        message: data.isCorrect
          ? `Congratulations! You guessed the word ${data.word}`
          : data.isGameOver
          ? `Game over! The word was: ${data.word}`
          : `Guess ${data.guessCount} of 6`,
      }));
    } catch (error) {
      console.log("Error making guess", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetGame = () => {
    setGameState({
      isActive: false,
      gameId: null,
      wordLength: 0,
      guesses: [],
      isGameOver: false,
      word: null,
      message: "",
    });
    setError("");
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Wordle Game
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mv: 2 }}>
          {error}
        </Alert>
      )}

      {loading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}

      <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 600, mx: "auto" }}>
        {!gameState.isActive ? (
          <GameSettings
            settings={gameSettings}
            onSettingChange={setGameSettings}
            onStartGame={startGame}
          />
        ) : (
          <GameBoard
            wordLength={gameState.wordLength}
            guesses={gameState.guesses}
            isGameOver={gameState.isGameOver}
            message={gameState.message}
            onMakeGuess={makeGuess}
            onResetGame={resetGame}
          />
        )}
      </Paper>
    </Box>
  );
}
export default HomePage;
