import wordleFeedback from "./wordleFeedback.js";
import { activeGames } from "./newGame.js";

export default function handleGameGuess(req, res) {
  const { gameId } = req.params;
  const { guess } = req.body;

  console.log(`GUESS REQUESTED recieved for game ${gameId}`);
  console.log(`Guess: ${guess}`);

  const game = activeGames.get(gameId);
  if (!game) {
    console.error(`ERROR: Game ${gameId} not found in active games!`);
    return res.status(404).json({ error: "Game not found" });
  }

  console.log(`Found game ${gameId}`);
  console.log(`Secret word: ${game.word} (only visible on server)`);
  console.log(`Guesses so far: ${game.guesses.length}`);

  if (guess.length !== game.word.length) {
    return res.status(400).json({
      error: `Your guess must contain ${game.word.length} number of characters.`,
    });
  }

  const isCorrect = guess.toUpperCase() === game.word;

  if (isCorrect) {
    const feedback = Array.from(game.word).map((letter) => ({
      letter,
      result: "correct",
    }));

    game.guesses.push({
      guess: guess.toUpperCase(),
      feedback,
    });

    console.log(`Game ${gameId} was won in ${game.guesses.length} guesses`);

    return res.json({
      feedback,
      isCorrect: true,
      guessCount: game.guesses.length,
      word: game.word,
      isGameOver: true,
    });
  }

  const feedback = wordleFeedback(guess, game.word);

  game.guesses.push({
    guess: guess.toUpperCase(),
    feedback,
  });

  const response = {
    feedback,
    isCorrect,
    guessCount: game.guesses.length,
  };

  if (game.guesses.length >= 6) {
    response.word = game.word;
    response.isGameOver = true;
    console.log(`Game ${gameId} was lost. Word was: ${game.word}`);
  }

  console.log(`Sending response to client:`, {
    ...response,
    word: response.word ? response.word : "[HIDDEN]",
  });

  res.json(response);
}
