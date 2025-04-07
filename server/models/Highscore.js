import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Number, required: true },
  guessCount: { type: Number, required: true },
  wordLength: { type: Number, required: true },
  uniqueLetters: { type: Boolean, required: true },
  date: { type: Date, required: true },
});

highscoreSchema.index({ time: 1 });

const Highscore = mongoose.model("Highscore", highscoreSchema);

export default Highscore;
