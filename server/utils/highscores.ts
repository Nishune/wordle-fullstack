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
