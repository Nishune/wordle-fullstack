import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Number, required: true },
  guessCount: { type: Number, required: true },
  wordLength: { type: Number, required: true },
  uniqueLetters: { type: Boolean, required: true },
  date: { type: Date, required: true },
});

//Creates the model Highscore based on the schema above, this modell is used to intergrate
//with the highscores-collection in mongodb.
const Highscore = mongoose.model("Highscore", highscoreSchema);

export default Highscore;
