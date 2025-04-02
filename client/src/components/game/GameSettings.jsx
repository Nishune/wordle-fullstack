import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Paper,
  Typography,
  Box,
  FormControl,
  Button,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

//Settings prop comes from homepage.jsx
//onSettingChange prop comes from homepage.jsx
//onStartGame prop comes from homepage.jsx
function GameSettings({ settings, onSettingChange, onStartGame }) {
  //Handles the word length dropdown-menu.
  const handleWordLengthChange = (event) => {
    onSettingChange({
      //Keep all current settings, but adds the new wordlength, parseint to convert to number.
      ...settings,
      wordLength: parseInt(event.target.value),
    });
  };

  //Handles the unique letters checkbox.
  const handleUniqueLettersChange = (event) => {
    onSettingChange({
      //keeps all the previous settings, but adds true/false for unique letters.
      ...settings,
      uniqueLetters: event.target.checked,
    });
  };

  return (
    <Paper
      elevation={3}
      sx={(theme) => ({
        padding: theme.spacing(4),
        borderRadius: theme.spacing(2),
        maxWidth: 500,
        width: "100%",
        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255, 152, 0, 0.2)"
            : "rgba(0, 0, 0, 0.1)"
        }`,
      })}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={(theme) => ({
          fontWeight: "bold",
          textAlign: "center",
          color: theme.palette.primary.main,
          marginBottom: theme.spacing(2),
        })}
      >
        Game Settings
      </Typography>

      <Box sx={(theme) => ({ marginTop: theme.spacing(4) })}>
        <FormControl
          sx={(theme) => ({
            marginBottom: theme.spacing(3),
            width: "100%",
          })}
        >
          <InputLabel id="word-length-label">Word Length</InputLabel>
          <Select
            labelId="word-length-label"
            id="word-length"
            value={settings.wordLength} //Comes from the gamesettings state in HomePage.jsx.
            label="Word Length"
            onChange={handleWordLengthChange} //Runs when the user choses a new number in the dropdown menu.
          >
            <MenuItem value={4}>4 letters</MenuItem>
            <MenuItem value={5}>5 letters</MenuItem>
            <MenuItem value={6}>6 letters</MenuItem>
            <MenuItem value={7}>7 letters</MenuItem>
            <MenuItem value={8}>8 letters</MenuItem>
            <MenuItem value={9}>9 letters</MenuItem>
          </Select>
        </FormControl>

        <FormGroup sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={settings.uniqueLetters} //State in Homepage.jsx
                onChange={handleUniqueLettersChange} //function that runs when the checkbox is clicked.
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
          sx={(theme) => ({
            padding: `${theme.spacing(1.5)} 0`,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: `0 4px 8px ${
              theme.palette.mode === "dark"
                ? "rgba(255, 152, 0, 0.3)"
                : "rgba(0, 0, 0, 0.2)"
            }`,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          })}
        >
          Start Game
        </Button>
      </Box>
    </Paper>
  );
}

export default GameSettings;
