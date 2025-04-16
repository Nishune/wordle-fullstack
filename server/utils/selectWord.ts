/////
//Functionality added for integration-tests
/////

let testModeWord: string | null = null; //Store the testword when we are in test mode

export function enableTestMode(word: string): void {
  // Activate test mode with a specific word
  testModeWord = word;
}

export function disableTestMode(): void {
  // Activate testmode for our integrationtest gameflow.test.ts.
  testModeWord = null;
}

function selectWord(
  wordList: string[],
  desiredLength: number,
  uniqueLettersOnly: boolean = false
): string | null {
  // If testmode is active, return the test word
  if (testModeWord !== null) {
    return testModeWord;
  }

  // Check so that the wordlist is a array and contains words
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return null;
  }

  // Filter words so they match the users choices
  const filteredWords = wordList.filter((word) => {
    // Remove blank space and convert to lowercase
    const cleanedWord = word.replace(/\s/g, "").toLowerCase();

    // Check if the words length, matches the users chosen length.
    if (cleanedWord.length !== desiredLength) return false;

    // If uniqueLettersOnly is true, check that all characters are unique
    // By using Set() we remove duplicates
    return (
      !uniqueLettersOnly || new Set(cleanedWord).size === cleanedWord.length //.size give the number of unique "characters / letters" depending on the cleanedword.length.
    );
  });

  // If no words found that matches criteria, return null.
  if (filteredWords.length === 0) return null;

  // Take a random word from the filtered words.
  const selectedWord =
    filteredWords[Math.floor(Math.random() * filteredWords.length)];

  console.log(`The selected word is: ${selectedWord}`);

  return selectedWord;
}

export default selectWord;
