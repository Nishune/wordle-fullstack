import express from "express";
import selectWord from "./utils/selectWord.js";
import { getWordList } from "./utils/loadWordList.js";

const app = express();

/////
//Middleware
/////
app.use(express.json());

app.get("/api/word", (req, res) => {
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
    console.error("Error when chosing word:", error);
    res.status(500).json({ error: "Servererror when chosing word." });
  }
});

export default app;
