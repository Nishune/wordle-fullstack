import express from "express";
import path from "path";
import handleNewGame from "./utils/newGame.js";
import handleGameGuess from "./utils/gameGuess.js";

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

app.get("/api/game/new", handleNewGame);
app.post("/api/game/:gameId/guess", handleGameGuess);

/////
// Client Routes
/////

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

export default app;
