import express from "express";
// import { getHighscores } from "../utils/highscores.js";
import { handleHighscores } from "../controllers/highscoreController.js";

const router = express.Router();

/////
//Highscore Route
/////

router.get("/highscore", handleHighscores);

export default router;
