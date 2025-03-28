export default function wordleFeedback(guess, correctWord) {
  //Removes all blank spaces and converts to uppercase.
  guess = guess.replace(/\s/g, "").toUpperCase();
  correctWord = correctWord.replace(/\s/g, "").toUpperCase();
  //if guess is not equal to "secret word"-length, returns message.
  if (guess.length !== correctWord.length) {
    return `Din gissning måste innehålla ${correctWord.length} antal bokstäver.`;
  }
  //if guess equals the "secret word", return message.
  if (guess === correctWord) {
    return "Grattis! Du har gissat rätt ord!";
  }
  //Array that holds the result for each letter.
  const result = [];
  //splits the guess & correctword to an array with separate characters.
  const guessArray = guess.split("");
  const correctWordArray = correctWord.split("");

  //Loops through every character in the guess.
  for (let i = 0; i < guessArray.length; i++) {
    //stores the "active" character from the guess.
    const currentChar = guessArray[i];
    //if the characters position is in the correct word and if the character matches
    //then we pushes it into the result with status correct.
    if (i < correctWordArray.length && currentChar === correctWordArray[i]) {
      result.push({
        letter: currentChar,
        result: "correct",
      });
      //marks the position in the correct word as used (null)
      //this is done to avoid that the same character matches again in the next iteration.
      correctWordArray[i] = null;

      //if the character is not correct on this position, mark it as pending as a temporary
      //status which will be updated in the second loop. So pending is just a "temporary" state for the character which is fixed in second loop.
    } else {
      result.push({
        letter: currentChar,
        result: "pending",
      });
    }
  }

  for (let i = 0; i < guessArray.length; i++) {
    //Only loop through character that still are marked as "pending"
    if (result[i].result === "pending") {
      const currentChar = guessArray[i];
      //Looks through the "secret word" after the actual character, if found, return its position, otherwise -1.
      const positionInSecretWord = correctWordArray.indexOf(currentChar);

      if (positionInSecretWord !== -1) {
        //if character is in the word, but at wrong position, mark as misplaced.
        result[i].result = "misplaced";
        correctWordArray[positionInSecretWord] = null;
      } else {
        //If the character is not in the secret word, or all occurences of the character already matched, we add incorrect.
        result[i].result = "incorrect";
      }
    }
  }
  console.log("Result array:", JSON.stringify(result, null, 2));
  return result;
}
const testResult = wordleFeedback("hallå", "cykla");
console.log(testResult);
