import React from "react";
import GuessRow from "./GuessRow";
import EmptyRow from "./EmptyRow";
import GuessInput from "./GuessInput";
import GameMessage from "./GameMessage";
import PlayAgainButton from "./PlayAgainButton";
function GameBoard({
  wordLength,
  guesses,
  isGameOver,
  message,
  onMakeGuess,
  onResetGame,
}) {
  return (
    <div className="game-board">
      <GameMessage message={message} />

      <div className="board-container">
        {guesses.map((guess, index) => (
          <GuessRow key={index} feedback={guess.feedback} />
        ))}

        {guesses.length < 6 && <EmptyRow length={wordLength} isActive={true} />}

        {Array.from({ length: Math.max(0, 5 - guesses.length) }).map(
          (_, index) => (
            <EmptyRow key={`empty-${index}`} length={wordLength} />
          )
        )}
      </div>

      {!isGameOver ? (
        <GuessInput
          wordLength={wordLength}
          onMakeGuess={onMakeGuess}
          disabled={isGameOver}
        />
      ) : (
        <PlayAgainButton onResetGame={onResetGame} />
      )}
    </div>
  );
}

export default GameBoard;
