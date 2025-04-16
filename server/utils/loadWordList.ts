import fs from "fs/promises";

//Wordlist which will contain all words from data file.
let wordList: string[] = [];

//Function to read in the words from the file.
export async function loadWordList(testWordList?: string[]): Promise<void> {
  //Promise void means that is asyncronous, and wont return a value when its done.

  //if testWordList exists, use that instead of reading file
  if (testWordList) {
    wordList = testWordList;
    console.log(`Laddade ${wordList.length} testord`);
    return;
  }

  try {
    // Reads the file words_alpha.txt loacted in the data folder.
    const data: string = await fs.readFile("./data/words_alpha.txt", "utf8");
    // Splits the content of the file at each linebreak.
    // And saves each row as an element in the wordlist Array.
    wordList = data.split(/\r?\n/);

    console.log(`Laddade ${wordList.length} ord från ordlistan`);
  } catch (error) {
    console.error("Error when reading wordlist:", error);
  }
}

export function getWordList(): string[] {
  return wordList;
}
