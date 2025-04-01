import React, { useState } from "react";
import GameBoard from "../components/game/GameBoard";
import GameSettings from "../components/game/GameSettings";
import ErrorMessage from "../components/common/ErrorMessage";
import LoadingSpinner from "../components/common/LoadingSpinner";
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
          errorData.error || "Could not start the game at this time."
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

      console.log("Game Started with ID:", data.gameId);
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
          ? `Grats! you guessed the word ${data.word}`
          : data.isGameOver
          ? `Game over! Correct word was ${data.word}`
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
    <div className="home-page">
      <h1 className="game-title">Wordle Game</h1>

      {error && <ErrorMessage message={error} />}

      {loading && <LoadingSpinner />}
      <div className="game-container">
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
      </div>
    </div>
  );
}
export default HomePage;
