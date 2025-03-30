import express from "express";
import path from "path";
import handleGetWord from "./utils/getRandomWord.js";

const app = express();

const activeGames = new Map();
/////
// Middleware
/////
app.use(express.json());

// Servera statiska filer från dist-mappen (använder processens arbetskatalog)
app.use(express.static("../client/dist"));

/////
// API Routes
/////

//API for retrieving a word.
app.get("/api/word", handleGetWord);

///
//API
///

/////
// Client Routes
/////

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

export default app;
