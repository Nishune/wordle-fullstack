import wordleFeedback from "./wordleFeedback.js";
import { activeGames } from "./newGame.js";
import { response } from "express";

export default function handleGameGuess(req, res) {
  const { gameId } = req.params;
  const { guess } = req.body;

  console.log(`Guess request recivied for game ${gameId}`);
  console.log(`Guess: ${guess}`);

  const game = activeGames.get(gameId);
  if (!game) {
    console.error(`ERROR: Game ${gameId} not found in active games.`);
    return res.status(404).json({ error: "Game not found." });
  }

  console.log(`Found game ${gameId}`);
  console.log(`Secret word: ${game.word} (only visible on server)`);
  console.log(`Guesses so far: ${game.guesses.length}`);

  const feedback = wordleFeedback(guess, game.word);
  console.log(`Feedback calculated:`, feedback);

  const isCorrect = guess.toUpperCase() === game.word;
  console.log(`Is guess correct? ${isCorrect ? "Yes!" : "No!"}`);

  game.guesses.push({
    guess: guess.toUpperCase(),
    feedback,
  });

  const reponse = {
    feedback,
    isCorrect,
    guessCount: game.guesses.length,
  };

  if (isCorrect || game.guesses.length >= 6) {
    response.word = game.word;
    reponse.isGameOver = true;

    if (isCorrect) {
      console.log(
        `Congrats! ${gameId} was won in ${game.guesses.length} guesses.`
      );
    } else {
      console.log(`Game ${gameId} was lost. word was: ${game.word}`);
    }
  }
  console.log(
    `🚀 Sending response to client:`,
    isCorrect || game.guesses.length >= 6
      ? response
      : { ...response, word: "[HIDDEN]" }
  );
  res.json(response);
}
