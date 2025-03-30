import React, { useState } from "react";
import { Typography, Box, Button, Paper, Grid, TextField } from "@mui/material";
import GameSettings from "../components/GameSettings";
function HomePage() {
  const [gameSettings, SetGameSettings] = useState({
    wordLength: 5,
    uniqueLetters: false,
  });

  const startGame = () => {
    console.log("Starting game with settings:", gameSettings);
  };
  return (
    <Box sc={{ py: 4 }}>
      <Typography variant="h3" component={"h1"} gutterBottom align="center">
        Wordle Game
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4, maxWidth: 500, max: "auto" }}>
        <GameSettings
          settings={gameSettings}
          onsettingChange={SetGameSettings}
          onStartGame={startGame}
        />
      </Paper>
    </Box>
  );
}
export default HomePage;
