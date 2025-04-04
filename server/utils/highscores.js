const highscores = [];

export function addHighscore(scoreData) {
  if (!scoreData.date) {
    scoreData.date = new Date();
  }

  highscores.push(scoreData);

  highscores.sort((a, b) => a.time - b.time);

  return scoreData;
}

export function getHighscores() {
  return highscores;
}

addHighscore({
  name: "Example User",
  time: 62000, // 1:02
  guesses: [
    {
      guess: "HELLO",
      feedback: [
        { letter: "H", result: "correct" },
        { letter: "E", result: "correct" },
        { letter: "L", result: "correct" },
        { letter: "L", result: "correct" },
        { letter: "O", result: "correct" },
      ],
    },
  ],
  wordLength: 5,
  uniqueLetters: false,
  date: new Date(),
});
