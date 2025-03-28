import React, { useState } from "react";
import { Typography, Box, Button, Paper, Grid, TextField } from "@mui/material";

function HomePage() {
  const [wordLength, setWordLength] = useState(5);
  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          textAlign: "center",
          backgroundImage: "linear-gradient(to bottom right, #f5f5f5, #e0e0e0)",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 4, color: "#2e7d32" }}
        >
          Wordle Game!
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Test your knowledge of words!
        </Typography>

        {/* GAME SETTINGS */}

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Number of characters"
            type="number"
            value={wordLength}
            onChange={(e) => setWordLength(Number(e.target.value))}
          />
        </Box>
      </Paper>
    </Box>
  );
}
export default HomePage;
