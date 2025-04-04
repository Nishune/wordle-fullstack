import wordleFeedback from "../utils/wordleFeedback.js";
import { activeGames } from "./newGame.js";

export default function handleGameGuess(req, res) {
  const { gameId } = req.params; //Takes the gameId from the URL-params sent by the user.
  const { guess } = req.body; //Takes the guess from the request body

  console.log(`GUESS REQUESTED recieved for game ${gameId}`);
  console.log(`Guess: ${guess}`);

  const game = activeGames.get(gameId); //Gets the active game from the Map() in newGame.js
  //If the game does not exist, return 404
  if (!game) {
    console.error(`ERROR: Game ${gameId} not found in active games!`);
    return res.status(404).json({ error: "Game not found" });
  }

  console.log(`Found game ${gameId}`);
  console.log(`Secret word: ${game.word} (only visible on server)`);
  console.log(`Guesses so far: ${game.guesses.length}`);

  //Checks so the guess has the same length as the word, this is also checked in frontend. But i followed "dont trust the client / user"
  if (guess.length !== game.word.length) {
    return res.status(400).json({
      error: `Your guess must contain ${game.word.length} number of characters.`,
    });
  }

  const isCorrect = guess.toUpperCase() === game.word; //Check is the guess is correct, and turns to uppercase.

  const feedback = wordleFeedback(guess, game.word); //Use the wordleFeedback algoritm to generate feedback for the guess.

  // Savess the guess and its feedback in the games history
  game.guesses.push({
    guess: guess.toUpperCase(),
    feedback,
  });

  // If the guess is correct
  if (isCorrect) {
    console.log(`Game ${gameId} was won in ${game.guesses.length} guesses`);

    return res.json({
      feedback,
      isCorrect: true,
      guessCount: game.guesses.length,
      word: game.word, // Show the correct word for the player
      isGameOver: true, // Switch isGameOver to true.
    });
  }

  // Reponse object for not correct guesses
  const response = {
    feedback,
    isCorrect,
    guessCount: game.guesses.length,
  };

  // If the player has used all the 6 guesses and lost the game
  if (game.guesses.length >= 6) {
    response.word = game.word; // Shows the correct word
    response.isGameOver = true; // sets isGameOver to true
    console.log(`Game ${gameId} was lost. Word was: ${game.word}`);
  }

  console.log(`Sending response to client:`, {
    ...response,
    word: response.word ? response.word : "[HIDDEN]",
  });

  res.json(response);
}
