import { getFilteredHighscores } from "../utils/highscores.js";
export async function handleHighscores(req, res) {
    try {
        const wordLengthFilter = req.query.wordLength
            ? parseInt(req.query.wordLength)
            : null;
        let uniqueLettersFilter;
        if (req.query.uniqueLetters === "true") {
            uniqueLettersFilter = true;
        }
        else if (req.query.uniqueLetters === "false") {
            uniqueLettersFilter = false;
        }
        const highscores = await getFilteredHighscores(wordLengthFilter, uniqueLettersFilter);
        res.render("highscore", {
            title: "Wordle Highscore",
            highscores: highscores,
            wordLengthFilter,
            uniqueLettersFilter,
        });
    }
    catch (error) {
        console.log("Error loading highscores", error);
        res
            .status(500)
            .send("An error occurred while trying to get the highscore list.");
    }
}
//# sourceMappingURL=highscoreController.js.map