export enum LetterResult {
  CORRECT = "correct",
  MISPLACED = "misplaced",
  INCORRECT = "incorrect",
  PENDING = "pending",
}

export interface LetterFeedback {
  letter: string;
  result: LetterResult;
}
