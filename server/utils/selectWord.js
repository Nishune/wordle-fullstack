function selectWord(wordList, desiredLength, uniqueLettersOnly = false) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    console.log("Ordlistan är tom eller ogiltig");
    return null;
  }

  if (!Number.isInteger(desiredLength) || desiredLength <= 0) {
    console.log(
      `Ogiltig längd: ${desiredLength}. Måste vara ett positivt heltal.`
    );
    return null;
  }

  const filteredWords = wordList.filter((word) => {
    const cleanedWord = word.replace(/\s/g, "").toLowerCase();

    if (cleanedWord.length !== desiredLength) {
      return false;
    }

    if (uniqueLettersOnly) {
      const letterSet = new Set(cleanedWord);
      return letterSet.size === cleanedWord.length;
    }

    return true;
  });

  console.log(
    `Filtrerade ord: ${filteredWords.length} av ${wordList.length} uppfyller kriterierna`
  );

  if (filteredWords.length === 0) {
    console.log("Inga ord uppfyller kriterierna");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  const selectedWord = filteredWords[randomIndex];

  console.log(`Valt ord: ${selectedWord}`);
  return selectedWord;
}

const testWordList = [
  "hej",
  "hus",
  "bil",
  "dator",
  "cykel",
  "boll",
  "katt",
  "hund",
  "plan",
  "tåg",
  "båt",
  "frukt",
  "glass",
  "kopp",
  "bok",
  "penna",
  "stol",
  "bord",
  "fågel",
  "vatten",
  "himmel",
  "jord",
  "sol",
  "måne",
  "äpple",
  "päron",
  "banan",
  "ananas",
  "spegel",
  "lampa",
  "fisk",
  "orm",
  "tiger",
  "lejon",
  "zebra",
  "kaffe",
  "te",
  "mjölk",
  "socker",
  "salt",
  "peppar",
  "tallrik",
  "gaffel",
  "kniv",
  "sked",
  "paket",
  "kamera",
  "aaa",
  "abba",
  "test",
  "anka",
  "abcdertasj",
];

console.log("\n--- TESTER ---");

console.log("\nTest 1: Ord med längd 3, utan krav på unika bokstäver");
const test1 = selectWord(testWordList, 3, false);

console.log("\nTest 2: Ord med längd 4, med krav på unika bokstäver");
const test2 = selectWord(testWordList, 4, true);

console.log("\nTest 3: Ord med längd 3, med krav på unika bokstäver");
const test3 = selectWord(testWordList, 3, true);

console.log("\nTest 4: Ord med längd 10, utan krav på unika bokstäver");
const test4 = selectWord(testWordList, 10, false);

export default selectWord;
