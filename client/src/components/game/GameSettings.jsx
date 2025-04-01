// src/components/game/GameSettings.jsx
import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import {
  SettingsContainer,
  SettingsTitle,
  FormContainer,
  WordLengthSelect,
  StartGameButton,
} from "../../styles/GameSettingsStyle";

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
    <SettingsContainer elevation={3}>
      <SettingsTitle variant="h5" component="h2" gutterBottom>
        Game Settings
      </SettingsTitle>

      <FormContainer>
        <WordLengthSelect>
          <InputLabel id="word-length-label">Word Length</InputLabel>
          <Select
            labelId="word-length-label"
            id="word-length"
            value={settings.wordLength}
            label="Word Length"
            onChange={handleWordLengthChange}
          >
            <MenuItem value={4}>4 letters</MenuItem>
            <MenuItem value={5}>5 letters</MenuItem>
            <MenuItem value={6}>6 letters</MenuItem>
            <MenuItem value={7}>7 letters</MenuItem>
          </Select>
        </WordLengthSelect>

        <FormGroup sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.uniqueLetters}
                onChange={handleUniqueLettersChange}
                color="primary"
              />
            }
            label="Only unique letters"
          />
        </FormGroup>

        <StartGameButton
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={onStartGame}
          startIcon={<PlayArrow />}
        >
          Start Game
        </StartGameButton>
      </FormContainer>
    </SettingsContainer>
  );
}

export default GameSettings;
