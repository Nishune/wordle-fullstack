import { getWordList } from "../utils/loadWordList.js";
import selectWord from "../utils/selectWord.js";
import { Request, Response } from "express";
import { Game } from "../types/game.types.js";

//Using Map to store all active games in the memory on the server.
export const activeGames = new Map<string, Game>();

export default function handleNewGame(req: Request, res: Response): void {
  const wordList = getWordList(); //Gets the wordlist from the server

  //Checks if the wordlist is empty
  if (!wordList.length) {
    res.status(500).json({ error: "Wordlist is not loaded yet." });
    return;
  }
  // Gets the settings the user chosen in the client from query params
  const lengthStr = req.query.length as string | undefined;
  const lengthVal = lengthStr ? parseInt(lengthStr) : NaN;
  const length = !isNaN(lengthVal) ? lengthVal : 5;
  const uniqueQuery = req.query.unique as string | undefined;
  const uniqueLetters = uniqueQuery ? JSON.parse(uniqueQuery) : false;

  try {
    // Chose a word from the wordliust based on the critera
    const word = selectWord(wordList, length, uniqueLetters);
    if (!word) {
      console.error("No matching words found for criteria:", {
        length,
        uniqueLetters,
      });
      res.status(404).json({ error: "No words matched the criteria" });
      return;
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

    res.json({
      gameId, // Games unique ID
      wordLength: length, //The words length
    });
  } catch (error) {
    res.status(500).json({ error: "Server errir" });
  }
}
