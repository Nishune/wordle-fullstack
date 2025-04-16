import request from "supertest";
import app from "../app";
import { activeGames } from "../api/newGame";
import { loadWordList } from "../utils/loadWordList";
import { enableTestMode } from "../utils/selectWord";
import { describe, it, expect, beforeAll, beforeEach } from "@jest/globals";
import { LetterFeedback } from "../types/feedback.types.js";

/////
//Variables used in the tests
/////
const TEST_WORD = "TESTS"; //The test word that will be used in the test.
const WORD_LENGTH = 5; //The word length that will be used in the test
const UNIQUE_LETTERS = false; //If we want unique letters or not.

/////
//Support function to create a new game to reduce duplicated code.
/////
async function createNewGame() {
  //Makes a get request to the api with word length and unique letters
  const response = await request(app)
    .get("/api/game/new")
    .query({ length: WORD_LENGTH, unique: UNIQUE_LETTERS });

  expect(response.status).toBe(200); //Check if the answer has status 200 (ok)
  expect(response.body).toHaveProperty("gameId"); //Checks that the game has a gameId

  return response.body.gameId; //Returns game id for later tests.
}
/////
//Support function to make a guess in a game
/////
async function makeGuess(gameId: string, guess: string) {
  //Makes a post to the api with the guess in request body
  const response = await request(app)
    .post(`/api/game/${gameId}/guess`)
    .send({ guess });

  return response;
}

/////
// The Test
/////

describe("Game flow integration test for the game", () => {
  beforeAll(async () => {
    enableTestMode(TEST_WORD); //Activates "test-mode" with our mocked word

    await loadWordList([TEST_WORD, "HELLO", "WORLD", "APPLE", "MANGO"]); //Loading our test wordlist instead from the wordlist file
  });

  beforeEach(() => {
    activeGames.clear();
  });

  /////
  // 1. Testing the complete gameflow
  /////

  it("Should complete the full game from start to finish", async () => {
    const gameId = await createNewGame(); //Creates a new game with the support function
    const wrongGuessResponse = await makeGuess(gameId, "WRONG"); //Makes an incorrect guess
    const correctGuessResponse = await makeGuess(gameId, TEST_WORD);

    // 1. Makes a wrong guess

    expect(wrongGuessResponse.status).toBe(200); // Expect the answer to be 200 (OK)
    expect(wrongGuessResponse.body).toHaveProperty("isCorrect", false); //Expect the guess to be "marked" as wrong
    expect(wrongGuessResponse.body).toHaveProperty("guessCount", 1); // Expect the guess to be the first guess.
    expect(wrongGuessResponse.body.feedback).toHaveLength(WORD_LENGTH); // Expect the answer to have feedback for each letter.

    // 2. Makes a correct guess
    expect(correctGuessResponse.status).toBe(200);
    expect(correctGuessResponse.body).toHaveProperty("isCorrect", true); //Expects the guess to be marked as correct.
    expect(correctGuessResponse.body).toHaveProperty("isGameOver", true); // Expect the game to be marked as over.
    expect(correctGuessResponse.body).toHaveProperty(
      "word",
      TEST_WORD.toUpperCase()
    ); // Expects thge correct word to be returned.
    expect(correctGuessResponse.body).toHaveProperty("guessCount", 2);
  });

  /////
  // 2. Testing handling of a non-existent game
  /////

  it("Should handle game not found", async () => {
    const nonExistingGameId = "non-existing-game-id";
    const guessResponse = await makeGuess(nonExistingGameId, "WRONG"); //Tries to make a guess to a gameid that does not exist

    expect(guessResponse.status).toBe(404);
    expect(guessResponse.body).toHaveProperty("error", "Game not found");
  });

  /////
  // 3. Testing input validation
  /////

  it("Should handle wrong guess length", async () => {
    const gameId = await createNewGame();
    const wrongLengthResponse = await makeGuess(gameId, "TOOLONG"); //Makes a guess thats is longer than the "secret word"

    expect(wrongLengthResponse.status).toBe(400); // expect the server to reject the guess
    expect(wrongLengthResponse.body).toHaveProperty("error"); // expect reponse to contain error message
    expect(wrongLengthResponse.body.error).toContain(
      `must contain ${WORD_LENGTH}`
    ); //error message should tell the correct word length
  });

  /////
  // 4. Testing the game completion after max guesses.
  /////

  it("should handle game over after 6 guesses have been made", async () => {
    const gameId = await createNewGame();

    let lastResponse; //used to save the latest anwer for later control

    // making 6 wrong guesses
    for (let i = 0; i < 6; i++) {
      lastResponse = await makeGuess(gameId, "WRONG");

      expect(lastResponse.status).toBe(200);
    }

    expect(lastResponse?.body).toHaveProperty("isGameOver", true); // after 6 guesses, expect game to be marked as game over.

    expect(lastResponse?.body).toHaveProperty("word", TEST_WORD.toUpperCase()); // expect the correct word to be shown to the player after game over.
  });

  /////
  // 5. Testing the feedback provided from a guess.
  /////

  it("Should provide the correct feedback for each letter in the guess", async () => {
    const gameId = await createNewGame();
    const guessResponse = await makeGuess(gameId, "TAPES"); //Making a guess with TAPES, since it has T & S in the "secret word" TESTS.
    const feedback = guessResponse.body.feedback; // GHets the feedback array from the response objekt

    expect(guessResponse.status).toBe(200);
    expect(guessResponse.body).toHaveProperty("feedback"); //expect the reponse to have a feedback array

    expect(feedback[0]).toHaveProperty("letter", "T"); //expect first letter to be T
    expect(feedback[0]).toHaveProperty("result", "correct"); //expect the result to be correct

    expect(feedback[4]).toHaveProperty("letter", "S"); //expect last letter to be S
    expect(feedback[4]).toHaveProperty("result", "correct"); //expect result to be correct

    //Checks that the result value is one of the three types
    feedback.forEach((letterFeedback: LetterFeedback) => {
      expect(letterFeedback).toHaveProperty("letter");
      expect(letterFeedback).toHaveProperty("result");

      expect(["correct", "misplaced", "incorrect"]).toContain(
        letterFeedback.result
      );
    });
  });
});
