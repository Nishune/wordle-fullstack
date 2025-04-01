import React from "react";

function PlayAgainButton({ onResetGame }) {
  return (
    <div className="reset-container">
      <button onClick={onResetGame} className="reset-button">
        Play Again
      </button>
    </div>
  );
}

export default PlayAgainButton;
