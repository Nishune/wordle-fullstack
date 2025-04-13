import express from "express";
import { handleHighscores } from "../controllers/highscoreController.js";
const router = express.Router();
/////
//Highscore Route
/////
router.get("/highscore", handleHighscores);
export default router;
//# sourceMappingURL=viewRoutes.js.map