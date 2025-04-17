import wordleFeedback from "../utils/wordleFeedback.js";
import { activeGames } from "./newGame.js";
import { Game } from "../types/game.types.js";
import { LetterFeedback } from "../types/feedback.types.js";
import { Request, Response } from "express";

export default function handleGameGuess(req: Request, res: Response): void {
  const { gameId } = req.params as { gameId: string }; //Takes the gameId from the URL-params sent by the user.
  const { guess } = req.body as { guess: string }; //Takes the guess from the request body

  const game = activeGames.get(gameId) as Game | undefined; //Gets the active game from the Map() in newGame.js
  //If the game does not exist, return 404
  if (!game) {
    console.error(`ERROR: Game ${gameId} not found in active games!`);
    res.status(404).json({ error: "Game not found" });
    return;
  }

  //Checks so the guess has the same length as the word, this is also checked in frontend. But i followed "dont trust the client / user"
  if (guess.length !== game.word.length) {
    res.status(400).json({
      error: `Your guess must contain ${game.word.length} number of characters.`,
    });
    return;
  }

  const isCorrect: boolean = guess.toUpperCase() === game.word; //Check is the guess is correct, and turns to uppercase.

  const feedback = wordleFeedback(guess, game.word); //Use the wordleFeedback algoritm to generate feedback for the guess.

  // Savess the guess and its feedback in the games history
  game.guesses.push({
    guess: guess.toUpperCase(),
    feedback: feedback as LetterFeedback[],
  });

  // If the guess is correct
  if (isCorrect) {
    res.json({
      feedback,
      isCorrect: true,
      guessCount: game.guesses.length,
      word: game.word, // Show the correct word for the player
      isGameOver: true, // Switch isGameOver to true.
    });
    return;
  }

  // Reponse object for not correct guesses
  const response: {
    feedback: LetterFeedback[];
    isCorrect: boolean;
    guessCount: number;
    word?: string;
    isGameOver?: boolean;
  } = {
    feedback: feedback as LetterFeedback[],
    isCorrect,
    guessCount: game.guesses.length,
  };

  // If the player has used all the 6 guesses and lost the game
  if (game.guesses.length >= 6) {
    response.word = game.word; // Shows the correct word
    response.isGameOver = true; // sets isGameOver to true
  }

  res.json(response);
}
