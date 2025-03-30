import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  Typography,
  InputLabel,
} from "@mui/material";
import React from "react";

function GameSettings({ settings, onSettingChange, onStartGame }) {
  const handleWordLengthChange = (event) => {
    onSettingChange({
      ...settings,
      wordLength: event.target.value,
    });
  };

  const handleUniqueLettersChange = (event) => {
    onSettingChange({
      ...settings,
      uniqueLetters: event.target.checked,
    });
  };

  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Game Settings
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="word-length-label">Word Length</InputLabel>
        <Select
          labelId="word-length-label"
          id="word-length"
          value={settings.wordLength}
          label="Word Length"
          onChange={handleWordLengthChange}
        >
          <MenuItem value={4}>4 letter</MenuItem>
          <MenuItem value={5}>5 letter</MenuItem>
          <MenuItem value={6}>6 letter</MenuItem>
          <MenuItem value={7}>7 letter</MenuItem>
        </Select>
      </FormControl>

      <FormGroup sx={{ mb: 3 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={settings.uniqueLetters}
              onChange={handleUniqueLettersChange}
            />
          }
          label="Only unique letters (no repeated letters)"
        />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        onClick={onStartGame}
      >
        Start Game
      </Button>
    </Box>
  );
}

export default GameSettings;
