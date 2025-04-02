import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import GameBoard from "../components/game/GameBoard";
import GameSettings from "../components/game/GameSettings";
import ErrorMessage from "../components/common/ErrorMessage";
import LoadingSpinner from "../components/common/LoadingSpinner";

function HomePage() {
  //State for gamesettings, which saves the users choices.
  const [gameSettings, setGameSettings] = useState({
    wordLength: 5, //Default state is 5 letters.
    uniqueLetters: false, //Default state is that unique letters is not chosen.
  });

  //The state for the game, which keeps track of all game logic and data.
  const [gameState, setGameState] = useState({
    isActive: false, // If a game is avctive at the moment
    gameId: null, // gameId comes from backend for the current game
    wordLength: 0, // the length of the word for the current game.,
    guesses: [], // Array of all the guesses and feedback from backend.
    isGameOver: false, // If the game is over or not.
    word: null, // The correct word, will only be shown once the game is over.
    message: "", // Message to show the user.
  });

  const [loading, setLoading] = useState(false); // This state is used for the loading spinner when fetching the API.
  const [error, setError] = useState(""); // State to show error messages if something goes wrong.

  const startGame = async () => {
    setLoading(true); //Set the state for the spinner to true under the API-fetch
    setError(""); // Resets errors that might have been present before.

    try {
      const response = await fetch(
        `/api/game/new?length=${gameSettings.wordLength}&unique=${gameSettings.uniqueLetters}` // URL with query-params based on the users current settings
      );
      // Error handling if the API call fails.
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Could not start the game at this time."
        );
      }

      const data = await response.json(); // Parse the data from the server to JSON.

      // Updatte game-status with new data from the server.
      setGameState({
        isActive: true, // The game is now active.
        gameId: data.gameId, // Save the games ID from the server.
        wordLength: data.wordLength, // the wordlength recieved from the server.
        guesses: [], // Clear the list with guesses for a new game.
        isGameOver: false, //The game is not over yet.
        word: null, // The correct word is hidden.
        message: "New game started! Make a guess..", // Message to user interface.
      });

      console.log("Game Started with ID:", data.gameId);
    } catch (error) {
      // Handle errors when starting the game.
      console.error("Error starting game:", error);
      setError(error.message);
    } finally {
      setLoading(false); // Sets the loading spinner to false
    }
  };

  const makeGuess = async (guess) => {
    //Abort if the game is not active or already over
    if (!gameState.isActive || gameState.isGameOver) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Makes a POST to the API with the guess.
      const response = await fetch(`/api/game/${gameState.gameId}/guess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guess }), //send it as json
      });

      // Error handling for the API
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Something went wrong with your guess, try again.."
        );
      }
      const data = await response.json();

      setGameState((prevState) => ({
        ...prevState, //Keeps the current state
        guesses: [...prevState.guesses, { guess, feedback: data.feedback }], // Adds the new guess and feedback from backend to the list
        isGameOver: data.isGameOver || false, //Update if the game is over
        word: data.word || null, //If the game is over, show the correct word
        message: data.isCorrect // Adds a message depending on the outcome.
          ? `Grats! you guessed the word ${data.word}` //if guess is correct
          : data.isGameOver
          ? `Game over! Correct word was ${data.word}` //If you lost the game, word is shown.
          : `Guess ${data.guessCount} of 6`, // Else show the number of guesses.
      }));
    } catch (error) {
      //Error handling for guesses (Maybe make error handling to a func??)
      console.log("Error making guess", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetGame = () => {
    //For the reset button, sets the game to its default value.
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        marginTop: "100px",
      }}
    >
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
          color: theme.palette.primary.main,
          textAlign: "center",
        })}
      >
        Wordle Game
      </Typography>
      {/*Only shows the error message if error state is not empty */}
      {error && <ErrorMessage message={error} />}
      {/* Only shows the loading spinner when the loading state is true. */}
      {loading && <LoadingSpinner />}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {/* Situational rendering here, either shows the settings or the game with the ternery operator. */}
        {!gameState.isActive ? (
          //If no game is active, show settings.
          <GameSettings
            settings={gameSettings} //sends down current settings as props
            onSettingChange={setGameSettings} // Sends down function to be able to update settings
            onStartGame={startGame} // Sends down a function to be able to start the game.
          />
        ) : (
          //If a game is active, show the gameboard.
          <GameBoard
            wordLength={gameState.wordLength} // Sends down the word length as props
            guesses={gameState.guesses} // Sends down the list with all the ealier guesses
            isGameOver={gameState.isGameOver} // sends down the currecnt game state
            message={gameState.message} //Sends down the messages to be displayed
            onMakeGuess={makeGuess} // Sends down the function to make a guess
            onResetGame={resetGame} // sends down the function to reset the game.
          />
        )}
      </Box>
    </Box>
  );
}

export default HomePage;
