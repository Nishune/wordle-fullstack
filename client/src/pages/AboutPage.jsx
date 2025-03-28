import React from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";

function AboutPage() {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
        <Typography
          variant="h3"
          component={"h1"}
          sx={{ mb: 3, color: "primary.main" }}
        >
          Om Wordle Game
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="body1" component={"p"} sx={{ mb: 2 }}>
          This is a fullstack project of the popular game Wordle.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            mt: 4,
            color: "secondary.main",
          }}
        >
          Teknologier som används
        </Typography>

        <Box sx={{ mb: 3, pl: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • <strong>Frontend:</strong> React, Material UI, React Router
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • <strong>Backend:</strong> Node.js, Express
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • <strong>Databas:</strong> För lagring av highscores
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default AboutPage;
