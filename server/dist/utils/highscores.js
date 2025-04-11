var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Highscore from "../models/Highscore.js";
export function addHighscore(scoreData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!scoreData.date) {
                scoreData.date = new Date();
            }
            const newHighscore = new Highscore(scoreData);
            yield newHighscore.save();
            return newHighscore;
        }
        catch (error) {
            console.error("Error saving highscore:", error);
            throw error;
        }
    });
}
export function getHighscores() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const highscores = yield Highscore.find().sort({ time: 1 });
            return highscores;
        }
        catch (error) {
            console.error("Error getting highscores:", error);
            throw error;
        }
    });
}
//# sourceMappingURL=highscores.js.map