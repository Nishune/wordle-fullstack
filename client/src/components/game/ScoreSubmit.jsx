import { Typography, Box, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";

function ScoreSubmit({ gameId, onResetGame }) {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(`/api/game/${gameId}/save-score`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit score");
      }

      setSuccess(true);
    } catch (error) {
      console.error("Error submitting score:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Alert severity="success" sx={{ mb: 2 }}>
          Your score has been saved to the highscore list!
        </Alert>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Check out the <a href="/highscore">highscore</a> to see where you
          stand!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onResetGame}
          sx={{ mt: 1 }}
        >
          Play again
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Sumbit Your Score
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ flex: 1 }}
          >
            {isSubmitting ? "Submitting..." : "Submit Score"}
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={onResetGame}
            disabled={isSubmitting}
            sx={{ flex: 1 }}
          >
            Skip & Play Again.
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ScoreSubmit;
