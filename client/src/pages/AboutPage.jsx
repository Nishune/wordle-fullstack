import React from "react";
import { Container, Typography, Paper, Box, Divider } from "@mui/material";

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper
        elevation={3}
        sx={(theme) => ({
          padding: theme.spacing(4),
          borderRadius: theme.spacing(2),
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255, 152, 0, 0.2)"
              : "rgba(0, 0, 0, 0.1)"
          }`,
        })}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={(theme) => ({
            fontWeight: "bold",
            color: theme.palette.primary.main,
            textAlign: "center",
            mb: 3,
          })}
        >
          About Wordle Game
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ color: "primary.main" }}
        >
          Project Description
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          This project is a fullstack implementation of a Wordle-inspired word
          guessing game. The application includes a game interface, a highscore
          list, and this information page.
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ mt: 3, color: "primary.main" }}
        >
          How to Play
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          1. Choose the length of the word you want to guess (4-9 letters).
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          2. Decide if you want the word to contain only unique letters.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          3. Guess the word by typing your guesses in the input field.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          4. After each guess, you'll receive feedback:
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Green: Correct letter in the right position</li>
            <li>Yellow: Correct letter but in the wrong position</li>
            <li>Red: Letter not in the word</li>
          </Box>
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          5. Try to guess the word in as few attempts as possible, you have 6
          guesses!
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ mt: 3, color: "primary.main" }}
        >
          Technical Implementation
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          <strong>Frontend:</strong> Built with React and Material UI for a
          responsive and modern interface.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          <strong>Backend:</strong> Node.js with Express serving both the React
          application and the server-side rendered highscore page.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          <strong>Word Selection:</strong> The game selects random words from a
          large English dictionary stored on the server.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          <strong>Highscore:</strong> Game results are stored in a database
          (MongoDB) and displayed on a server-side rendered page which uses EJS.
        </Typography>
      </Paper>
    </Container>
  );
}

export default AboutPage;
