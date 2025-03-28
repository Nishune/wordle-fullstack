import fs from "fs/promises";

//Wordlist which will contain all words from data file.
let wordList = [];

//Function to read in the words from the file.
export async function loadWordList() {
  try {
    const data = await fs.readFile("./data/words_alpha.txt", "utf8");

    wordList = data.split(/\r?\n/);

    console.log(`Laddade ${wordList.length} ord från ordlistan`);
  } catch (error) {
    console.error("Error when reading wordlist:", error);
  }
}

export function getWordList() {
  return wordList;
}
