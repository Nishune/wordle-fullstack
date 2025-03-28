import express from "express";
import path from "path";
import selectWord from "./utils/selectWord.js";
import { getWordList } from "./utils/loadWordList.js";

const app = express();

/////
// Middleware
/////
app.use(express.json());

// Servera statiska filer från dist-mappen (använder processens arbetskatalog)
app.use(express.static("../client/dist"));

/////
// API Routes
/////
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
    console.error("Error when choosing word:", error);
    res.status(500).json({ error: "Server error when choosing word." });
  }
});

/////
// Client Routes
/////
// Hantera alla andra routes genom att skicka index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

export default app;
