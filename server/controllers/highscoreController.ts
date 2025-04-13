import { Request, Response } from "express";
import { getFilteredHighscores } from "../utils/highscores";

export async function handleHighscores(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const wordLengthFilter = req.query.wordLength
      ? parseInt(req.query.wordLength as string)
      : null;

    let uniqueLettersFilter;
    if (req.query.uniqueLetters !== undefined) {
      uniqueLettersFilter = req.query.uniqueLetters === "true";
    }

    const highscores = await getFilteredHighscores(
      wordLengthFilter,
      uniqueLettersFilter
    );

    res.render("highscore"),
      {
        title: "Wordle Highscore",
        highscores: highscores,
        wordLengthFilter,
        uniqueLettersFilter,
      };
  } catch (error) {
    console.log("Error loadiong highscores", error);
    res
      .status(500)
      .send("An error occurred while tryuing to get the highscore list.");
  }
}
