import { getWordList } from "./loadWordList.js";
import selectWord from "./selectWord.js";

export const activeGames = new Map();

export default function handleNewGame(req, res) {
  console.log("New game request revievied with params:", req.query);

  const wordList = getWordList();
  if (!wordList.length) {
    console.error("ERROR: wordlist is empty");
    return res.status(500).json({ error: "Wordlist is not loaded yet." });
  }

  const length = parseInt(req.query.length) || 5;
  const uniqueLetters = req.query.unique === "true";

  console.log(
    `Selecting a word with length ${length}, unique letters: ${uniqueLetters}`
  );

  try {
    const word = selectWord(wordList, length, uniqueLetters);
    if (!word) {
      console.error("No matching words found for criteria:", {
        length,
        uniqueLetters,
      });
      return res.status(404).json({ error: "No words matched the criteria" });
    }
    //create game id and save game
    const gameId =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 5);

    //save game in our Map().

    activeGames.set(gameId, {
      word: word.toUpperCase(),
      guesses: [],
      startTime: Date.now(),
      settings: {
        wordLength: length,
        uniqueLetters: uniqueLetters,
      },
    });
    console.log(` Game created successfully!`);
    console.log(` Game ID: ${gameId}`);
    console.log(` Secret word: ${word.toUpperCase()} (only visible on server)`);
    console.log(` Total active games: ${activeGames.size}`);

    res.json({
      gameId,
      wordLength: length,
    });
  } catch (error) {
    console.log("Error starting new game", error);
    res.status(500).json({ error: "Server errir" });
  }
}
