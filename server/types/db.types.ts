import { Document } from "mongoose";

export interface IHighscore extends Document {
  name: string;
  time: number;
  guessCount: number;
  wordLength: number;
  uniqueLetters: boolean;
  date: Date;
}
