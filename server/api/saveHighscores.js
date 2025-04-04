import { activeGames } from "./newGame.js";
import { addHighscore } from "../utils/highscores.js";

export default function handleSaveHighscore(req, res) {
  const { gameId } = req.params;
  const { name } = req.body;

  console.log(`Saving highscore for game ${gameId}, player: ${name}`);

  const game = activeGames.get(gameId);

  if (!game) {
    console.log(`Error: Game ${gameId} not found in active games`);
    return res.status(404).json({ error: "Game not found" });
  }

  const lastGuess = game.guesses[game.guesses.length - 1];
  const isWon = lastGuess && lastGuess.guess === game.word;

  if (!isWon) {
    console.log(`Error: Game ${gameId} was not won, cannot save highscore`);
    return res
      .status(404)
      .json({ error: "Game is not completed successfully" });
  }

  console.log(`Game ${gameId} was won, saving highscore`);

  const endTime = Date.now();
  const timeTaken = endTime - game.startTime;

  console.log(
    `Game time: ${timeTaken}ms (${Math.floor(timeTaken / 1000)} seconds)`
  );

  const scoreData = {
    name: name || "Anonymous",
    time: timeTaken,
    guesses: game.guesses,
    wordLength: game.settings.wordLength,
    uniqueLetters: game.settings.uniqueLetters,
    date: new Date(),
  };

  const savedScore = addHighscore(scoreData);

  activeGames.delete(gameId);

  console.log(`Highscore saved successfully for ${name}`);

  res.json({
    success: true,
    score: savedScore,
  });
}
