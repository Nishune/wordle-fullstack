import React from "react";

function GameSettings({ settings, onSettingChange, onStartGame }) {
  const handleWordLengthChange = (event) => {
    onSettingChange({
      ...settings,
      wordLength: parseInt(event.target.value),
    });
  };

  const handleUniqueLettersChange = (event) => {
    onSettingChange({
      ...settings,
      uniqueLetters: event.target.checked,
    });
  };

  return (
    <div className="game-settings">
      <h2 className="settings-title">Game Settings</h2>

      <div className="settings-form">
        <div className="form-group">
          <label htmlFor="word-length" className="select-label">
            Word Length
          </label>
          <select
            id="word-length"
            value={settings.wordLength}
            onChange={handleWordLengthChange}
            className="select-input"
          >
            <option value={4}>4 letters</option>
            <option value={5}>5 letters</option>
            <option value={6}>6 letters</option>
            <option value={7}>7 letters</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={settings.uniqueLetters}
              onChange={handleUniqueLettersChange}
              className="checkbox-input"
            />
            <span>Only unique letters</span>
          </label>
        </div>

        <button className="start-button" onClick={onStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default GameSettings;
