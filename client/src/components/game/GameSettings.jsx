import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
  FormGroup,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

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
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        borderRadius: 2,
        maxWidth: 400,
        margin: "0 auto",
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        Game Settings
      </Typography>

      <Box sx={{ mt: 3 }}>
        <FormControl fullWidth sx={{ mb: 3 }}>
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
        </FormControl>

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

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={onStartGame}
          startIcon={<PlayArrow />}
          sx={{
            py: 1.5,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Start Game
        </Button>
      </Box>
    </Paper>
  );
}

export default GameSettings;
