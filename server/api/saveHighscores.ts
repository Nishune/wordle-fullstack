import { activeGames } from "./newGame.js";
import { Game } from "../types/game.types.js";
import { addHighscore } from "../utils/highscores.js";
import { Request, Response } from "express";

export default async function handleSaveHighscore(
  req: Request,
  res: Response
): Promise<void> {
  const { gameId } = req.params as { gameId: string }; //Gets the gameId from the URL-params
  const { name } = req.body as { name: string }; //Gets the player name from the request-body.

  const game = activeGames.get(gameId) as Game | undefined; // saving the game data from the activeGame Map() in newGame.js, with gameId as key.

  //Checks if the game exists.
  if (!game) {
    res.status(404).json({ error: "Game not found" });
    return;
  }

  const lastGuess = game.guesses[game.guesses.length - 1]; //Gets the last guess from the arary.
  const isWon = lastGuess && lastGuess.guess === game.word; // Checks if the game is won by comparing the last guess with the correct word.

  //an extra check so a player cant send in points for a non completed game
  if (!isWon) {
    res.status(400).json({ error: "Game is not completed successfully" });
    return;
  }

  const endTime = Date.now(); // Saves the current time
  const timeTaken = endTime - game.startTime; // saves the time taken to complete the game.

  // Creates an object with all relevant data for the highscore.
  const scoreData = {
    name: name, //
    time: timeTaken, //Time in millisec
    guessCount: game.guesses.length, //all guesses with feedback
    wordLength: game.settings.wordLength, //the words length
    uniqueLetters: game.settings.uniqueLetters, //if unique letters was activated
    date: new Date(), // current date and time.
  };

  const savedScore = await addHighscore(scoreData); //Saves the players result in the highscore list

  activeGames.delete(gameId); //Deletes the completed game.

  res.json({
    success: true,
    score: savedScore,
  });
}
