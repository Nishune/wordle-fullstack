import { getWordList } from "./loadWordList.js";
import selectWord from "./selectWord.js";

export default function handleGetWord(req, res) {
  const wordList = getWordList();
  // Kontrollera att ordlistan är laddad
  if (!wordList.length) {
    return res.status(500).json({ error: "Wordlist is not loaded yet." });
  }

  // Hämtar parametrar från query string
  const length = parseInt(req.query.length) || 5; // Default längd: 5
  const uniqueLetters = req.query.unique === "true"; // Default: false

  try {
    const word = selectWord(wordList, length, uniqueLetters);
    if (!word) {
      return res.status(404).json({
        error: "No words matched the criteria",
        params: { length, uniqueLetters },
      });
    }
    res.json({ word });
  } catch (error) {
    console.error("Error when choosing word:", error);
    res.status(500).json({ error: "Server error when choosing word." });
  }
}
