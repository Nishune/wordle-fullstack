import { Request, Response } from "express";
import { getFilteredHighscores } from "../utils/highscores.js";

export async function handleHighscores(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // Check if wordlength is in the querystring
    //if it is, convert to whole number, else set value to null.
    const wordLengthFilter = req.query.wordLength
      ? parseInt(req.query.wordLength as string)
      : null;

    let uniqueLettersFilter; //Stores the filtering of unique letters
    // if uniqueLetters in the query is true, set filter to true
    if (req.query.uniqueLetters === "true") {
      uniqueLettersFilter = true;

      // if its false, set filter to false
    } else if (req.query.uniqueLetters === "false") {
      uniqueLettersFilter = false;
    }
    //Calling getfilt func, with filtered parameters
    //Await the batabase query to complete.
    const highscores = await getFilteredHighscores(
      wordLengthFilter,
      uniqueLettersFilter
    );

    res.render("highscore", {
      title: "Wordle Highscore", //Title highscore page
      highscores: highscores, // The list with highscore from mongodb
      wordLengthFilter, //the active filter for word length used to show active filter in ui
      uniqueLettersFilter, // Same as word length, but for unique letters.
    });
  } catch (error) {
    console.log("Error loading highscores", error);
    res
      .status(500)
      .send("An error occurred while trying to get the highscore list.");
  }
}
