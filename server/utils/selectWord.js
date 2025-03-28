function selectWord(wordList, desiredLength, uniqueLettersOnly = false) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return null;
  }

  if (!Number.isInteger(desiredLength) || desiredLength <= 0) {
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

  if (filteredWords.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  const selectedWord = filteredWords[randomIndex];

  console.log(`Valt ord: ${selectedWord}`);
  return selectedWord;
}

export default selectWord;
