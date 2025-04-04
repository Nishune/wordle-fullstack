const highscores = [];

export function addHighscore(scoreData) {
  if (!scoreData.date) {
    scoreData.date = new Date();
  }

  highscores.push(scoreData);

  highscores.sort((a, b) => a.time -  b.time);

  return scoreData;
}

export function getHighscores() {
  return  highscores;
}
