import express from "express";
import { getHighscores } from "../utils/highscores.js";
const router = express.Router();
/////
//Highscore Route
/////
router.get("/highscore", async (req, res) => {
    try {
        const highscores = await getHighscores();
        res.render("highscore", {
            title: "Wordle Highscore",
            highscores: highscores,
        });
    }
    catch (error) {
        console.log("Error loading highscores", error);
        res
            .status(500)
            .send("An error occurred while trying to get the highscore list.");
    }
});
export default router;
//# sourceMappingURL=viewRoutes.js.map