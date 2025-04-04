import { getWordList } from "../utils/loadWordList.js";
import selectWord from "../utils/selectWord.js";

//Using Map to store all active games in the memory on the server.
export const activeGames = new Map();

export default function handleNewGame(req, res) {
  console.log("New game request revievied with params:", req.query);

  const wordList = getWordList(); //Gets the wordlist from the server

  //Checks if the wordlist is empty
  if (!wordList.length) {
    console.error("ERROR: wordlist is empty");
    return res.status(500).json({ error: "Wordlist is not loaded yet." });
  }
  // Gets the settings the user chosen in the client from query params
  const length = parseInt(req.query.length) || 5;
  //Converts the query param from string to boolean, default value is false
  const uniqueLetters = JSON.parse(req.query.unique || "false");

  console.log(
    `Selecting a word with length ${length}, unique letters: ${uniqueLetters}`
  );

  try {
    // Chose a word from the wordliust based on the critera
    const word = selectWord(wordList, length, uniqueLetters);
    if (!word) {
      console.error("No matching words found for criteria:", {
        length,
        uniqueLetters,
      });
      return res.status(404).json({ error: "No words matched the criteria" });
    }
    //create a unique game-id with a combination of timestamp and random number in base36 format
    const gameId =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 5);

    //The new game gets saved in our Map() with gameId as key.
    //All gamedata gets stored in an objekt
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
      gameId, // Games unique ID
      wordLength: length, //The words length
    });
  } catch (error) {
    console.log("Error starting new game", error);
    res.status(500).json({ error: "Server errir" });
  }
}
