import { expect, describe, it } from "@jest/globals";
import wordleFeedback, { LetterResult } from "./wordleFeedback";
/*
//////////
///Test-strategy for algoritm A (wordleFeedback.js)
/////////

Here we use unit tests to test the wordleFeedback function with jest. The function is tested directly and has no "external" dependencies.
No mocks are needed since we are not using any dynamic data. The tests we are doing are listed below.

1. Length control
-Verifies that the function return an error message when the guess
has another length than the "secret-word".

2. Player guess the correct word.
-When a player guess the correct secret word, message displays.

3. Test for correct characters
-Test that checks for correct, misplaced, incorrect and repeated characters.

4. Testing the assignment example & return values.
-Test that matches the assignment
-Test that verifies the function returns an array with the correct structure and length

5. Special occurences
-Test for case sensetivity
-Test for white space
*/
////
//TEST 1
////
describe("wordleFeedback", () => {
    it("Returns a error message when the guess is to short", () => {
        const result = wordleFeedback("HEJ", "CYKEL");
        expect(result).toBe("Din gissning måste innehålla 5 antal bokstäver.");
    });
    it("returns a message when the guess is to long", () => {
        const result = wordleFeedback("ELEFANTER", "CYKEL");
        expect(result).toBe("Din gissning måste innehålla 5 antal bokstäver.");
    });
    ////
    //TEST 2
    ////
    it("Returns correct feedback array when the guess is correct", () => {
        const result = wordleFeedback("CYKEL", "CYKEL");
        // Kontrollera att det är en array
        expect(Array.isArray(result)).toBe(true);
        // Kontrollera att alla bokstäver är markerade som korrekta
        if (Array.isArray(result)) {
            result.forEach((item) => {
                expect(item.result).toBe(LetterResult.CORRECT);
            });
        }
    });
    ////
    //TEST 3
    ////
    it("Identifies corrrect characters on the right place", () => {
        const result = wordleFeedback("CALLE", "CYKEL");
        if (Array.isArray(result)) {
            expect(result[0]).toEqual({ letter: "C", result: LetterResult.CORRECT });
            expect(result[1]).toEqual({
                letter: "A",
                result: LetterResult.INCORRECT,
            });
            expect(result[2]).toEqual({
                letter: "L",
                result: LetterResult.MISPLACED,
            });
            expect(result[3]).toEqual({
                letter: "L",
                result: LetterResult.INCORRECT,
            });
            expect(result[4]).toEqual({
                letter: "E",
                result: LetterResult.MISPLACED,
            });
        }
    });
    ////
    //TEST 4
    ////
    it("Matches the assignment output in the assignment", () => {
        const result = wordleFeedback("HALLÅ", "CYKLA");
        if (Array.isArray(result)) {
            expect(result[0]).toEqual({
                letter: "H",
                result: LetterResult.INCORRECT,
            });
            expect(result[1]).toEqual({
                letter: "A",
                result: LetterResult.MISPLACED,
            });
            expect(result[2]).toEqual({
                letter: "L",
                result: LetterResult.INCORRECT,
            });
            expect(result[3]).toEqual({ letter: "L", result: LetterResult.CORRECT });
            expect(result[4]).toEqual({
                letter: "Å",
                result: LetterResult.INCORRECT,
            });
        }
    });
    it("Returns an array with the same length as the guess and correct structure", () => {
        const guess = "HALLÅ";
        const result = wordleFeedback(guess, "CYKLA");
        if (Array.isArray(result)) {
            expect(result.length).toBe(guess.length);
            result.forEach((item) => {
                expect(item).toHaveProperty("letter");
                expect(item).toHaveProperty("result");
                expect([
                    LetterResult.CORRECT,
                    LetterResult.MISPLACED,
                    LetterResult.INCORRECT,
                ]).toContain(item.result);
            });
        }
    });
    ////
    //TEST 5
    ////
    it("Handles case sensetivity correct", () => {
        const result = wordleFeedback("CyKeL", "cYkEl");
        // Check to see if all characters ius marked as correct
        if (Array.isArray(result)) {
            result.forEach((item) => {
                expect(item.result).toBe(LetterResult.CORRECT);
            });
        }
    });
    it("handles whitespace correct", () => {
        const result = wordleFeedback("C Y K E L", "CYKEL");
        // Check to see if all letters is marked as correct
        if (Array.isArray(result)) {
            result.forEach((item) => {
                expect(item.result).toBe(LetterResult.CORRECT);
            });
        }
    });
});
//# sourceMappingURL=wordleFeedback.test.js.map