import React from "react";

function GameMessage({ message }) {
  return (
    <div className="game-message">
      <p className="game-message__text">{message}</p>
    </div>
  );
}

export default GameMessage;
