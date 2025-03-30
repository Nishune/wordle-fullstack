import React, { useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import GameSettings from "../components/GameSettings";

function HomePage() {
  const [gameSettings, setGameSettings] = useState({
    wordLength: 5,
    uniqueLetters: false,
  });

  const startGame = () => {
    console.log("Starting game with settings:", gameSettings);
  };
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h3" component={"h1"} gutterBottom align="center">
        Wordle Game
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 500, mx: "auto" }}>
        <GameSettings
          settings={gameSettings}
          onSettingChange={setGameSettings}
          onStartGame={startGame}
        />
      </Paper>
    </Box>
  );
}
export default HomePage;
