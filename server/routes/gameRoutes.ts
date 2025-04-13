import express from "express";
import handleNewGame from "../api/newGame.js";
import handleGameGuess from "../api/gameGuess.js";
import handleSaveHighscore from "../api/saveHighscores.js";

const router = express.Router();

/////
//API Routes
/////

router.get("/new", handleNewGame);
router.post("/:gameId/guess", handleGameGuess);
router.post("/:gameId/save-score", handleSaveHighscore);

export default router;
