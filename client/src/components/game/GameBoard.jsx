import React from "react";
import GuessRow from "./GuessRow";
import EmptyRow from "./EmptyRow";
import GuessInput from "./GuessInput";
import GameMessage from "./GameMessage";
import PlayAgainButton from "./PlayAgainButton";
import {
  GameBoardContainer,
  BoardGrid,
  InputContainer,
} from "../../styles/GameBoardStyles";

function GameBoard({
  wordLength,
  guesses,
  isGameOver,
  message,
  onMakeGuess,
  onResetGame,
}) {
  return (
    <GameBoardContainer elevation={3}>
      <GameMessage message={message} />

      <BoardGrid>
        {guesses.map((guess, index) => (
          <GuessRow key={index} feedback={guess.feedback} />
        ))}

        {guesses.length < 6 && <EmptyRow length={wordLength} isActive={true} />}

        {Array.from({ length: Math.max(0, 5 - guesses.length) }).map(
          (_, index) => (
            <EmptyRow key={`empty-${index}`} length={wordLength} />
          )
        )}
      </BoardGrid>

      <InputContainer>
        {!isGameOver ? (
          <GuessInput
            wordLength={wordLength}
            onMakeGuess={onMakeGuess}
            disabled={isGameOver}
          />
        ) : (
          <PlayAgainButton onResetGame={onResetGame} />
        )}
      </InputContainer>
    </GameBoardContainer>
  );
}

export default GameBoard;
