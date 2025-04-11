var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { getHighscores } from "../utils/highscores.js";
const router = express.Router();
/////
//Highscore Route
/////
router.get("/highscore", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const highscores = yield getHighscores();
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
}));
export default router;
//# sourceMappingURL=viewRoutes.js.map