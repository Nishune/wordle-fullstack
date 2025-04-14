import Highscore, { IHighscore } from "../models/Highscore.js";

export async function addHighscore(
  scoreData: Partial<IHighscore>
): Promise<IHighscore> {
  try {
    if (!scoreData.date) {
      scoreData.date = new Date();
    }

    const newHighscore = new Highscore(scoreData);
    await newHighscore.save();

    return newHighscore;
  } catch (error) {
    console.error("Error saving highscore:", error);
    throw error;
  }
}

export async function getHighscores(): Promise<IHighscore[]> {
  try {
    const highscores = await Highscore.find().sort({ time: 1 });
    return highscores;
  } catch (error) {
    console.error("Error getting highscores:", error);
    throw error;
  }
}

export async function getFilteredHighscores(
  wordLength: number | null = null,
  uniqueLetters: boolean | undefined = undefined
): Promise<IHighscore[]> {
  try {
    const query: any = {};

    if (wordLength !== null) {
      query.wordLength = wordLength;
    }

    if (uniqueLetters !== undefined) {
      query.uniqueLetters = uniqueLetters;
    }
    console.log("Filtering highscores with query:", query);

    const highscores = await Highscore.find(query)
      .sort({ guessCount: 1, time: 1 })
      .limit(20);

    return highscores;
  } catch (error) {
    console.error("Error fetching filtered highscores:", error);
    throw error;
  }
}
