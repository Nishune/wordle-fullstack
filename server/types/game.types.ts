import { LetterFeedback } from "./feedback.types.js";
import { IHighscore } from "./db.types.js";

export interface GameSettings {
  wordLength: number;
  uniqueLetters: boolean;
}

export interface Game {
  word: string;
  guesses: {
    guess: string;
    feedback: LetterFeedback[];
  }[];
  startTime: number;
  settings: GameSettings;
}

export interface GameResponse {
  gameId: string;
  wordLength: number;
}

export interface GuessResponse {
  feedback: LetterFeedback[];
  isCorrect: boolean;
  guessCount: number;
  word?: string;
  isGameOver?: boolean;
}

export interface ScoreData {
  name: string;
  time: number;
  guessCount: number;
  wordLength: number;
  uniqueLetters: boolean;
  date: Date;
}

export interface ScoreResponse {
  success: boolean;
  score: IHighscore;
}
