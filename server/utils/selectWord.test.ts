import selectWord from "./selectWord";
import { expect, describe, it, jest, afterEach } from "@jest/globals";

//Adds a spy on Math.random to check its behaviour in the tests.
//This makes it possible to determine which random word will be chosen.
const mockMathRandom = jest.spyOn(Math, "random");

// Creates a spy on console.log to avoid prints in the terminal during testing
const mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Select word function", () => {
  //Reset all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  //Test 1: choose a word with correct length
  it("should select a word of the correct length", () => {
    mockMathRandom.mockReturnValue(0); //Sets math random to 0, så we choose the first word in the array.

    const wordList = ["cat", "inside", "house", "jumping"];
    const result = selectWord(wordList, 3);

    expect(result).toBe("cat");
  });

  //test 2: Filter for only unique letters
  it("should filter words based on uniqueLettersOnly paramter", () => {
    mockMathRandom.mockReturnValue(0);

    const wordlist = ["hello", "world", "abcde", "house"];

    //When uniqueLettersOnly is false, the first word should be chosen.
    const resultWithoutUnique = selectWord(wordlist, 5, false);
    expect(resultWithoutUnique).toBe("hello");

    //When uniqueletteronly is true, all letters must be unique.
    mockMathRandom.mockReturnValue(0);
    const resultWithUnique = selectWord(wordlist, 5, true);

    expect(resultWithUnique).toBe("world");
  });

  it("should handle words with spaces correctly", () => {
    mockMathRandom.mockReturnValue(0);

    const wordList = ["h ej"];
    const result = selectWord(wordList, 3);

    expect(result).toBe("h ej");
  });

  it("should be case insensetive when matching word length", () => {
    mockMathRandom.mockReturnValue(0);

    const wordList = ["H eJ"];
    const result = selectWord(wordList, 3);

    expect(result).toBe("H eJ");
  });

  it("should randomlyu select a word from filtered matches", () => {
    //Simulate random values
    mockMathRandom
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.9);

    const wordList = ["cat", "dog", "rat", "bat", "mat"];

    const result1 = selectWord(wordList, 3);
    const result2 = selectWord(wordList, 3);
    const result3 = selectWord(wordList, 3);

    expect(result1).toBe("cat");
    expect(result2).toBe("rat");
    expect(result3).toBe("mat");

    expect(mockMathRandom).toHaveBeenCalledTimes(3);
  });
});
