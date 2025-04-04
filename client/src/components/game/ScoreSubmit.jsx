import { Typography, Box, TextField, Button, Alert, Link } from "@mui/material";
import React, { useState } from "react";

function ScoreSubmit({ gameId, onResetGame }) {
  const [name, setName] = useState(""); // State to store users name
  const [isSubmitting, setIsSubmitting] = useState(false); // State to check if the form is about to be sent.
  const [error, setError] = useState(""); // Stores error messages if there is any
  const [success, setSuccess] = useState(false); // checks if the score have saved successfully.

  //Function to handle the forms submit.
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validates that the user name is not empty
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setIsSubmitting(true); //Sets isSubmitting to true, to show that the API-call have begun.
    setError(""); //clear messages if there was any.

    try {
      //Sends API request to save the score.
      const response = await fetch(`/api/game/${gameId}/save-score`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name.trim() }),
      });
      //check to see if the API-answer has any error
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit score");
      }

      setSuccess(true); // "Marks" that the score has been saved successfully.
    } catch (error) {
      console.error("Error submitting score:", error);
      setError(error.message);
    } finally {
      setIsSubmitting(false); //Set to false again and activates the form.
    }
  };

  if (success) {
    return (
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Alert severity="success" sx={{ mb: 2 }}>
          Your score has been saved to the highscore list!
        </Alert>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Check out the{" "}
          <Link
            href="/highscore"
            sx={{
              color: "warning.main",
              fontWeight: "medium",
              "&:hover": {
                color: "warning.dark",
                textDecoration: "underline",
              },
            }}
          >
            Highscore
          </Link>{" "}
          to see where you stand!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onResetGame}
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
            width: "60%",
            mt: 1,
          })}
        >
          Play again
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Submit Your Score
      </Typography>
      {/* Display error messages if there si any */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {/* Inputfield for username */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)} //Updates name state when the user writes
          disabled={isSubmitting} //inactivates the field while a submit is "ongoing".
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Submit button that shows different text depending on submit-status */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={(theme) => ({
              flex: 1,
              padding: `${theme.spacing(1.5)} 0`,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: `0 4px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgba(255, 152, 0, 0.3)"
                    : "rgba(0, 0, 0, 0.2)"
                }`, // Lägg till skuggan endast vid hover
              },
            })}
          >
            {isSubmitting ? "Submitting..." : "Submit Score"}
          </Button>
          {/* Button to skip saving score and play another game */}
          <Button
            variant="outlined"
            color="primary"
            onClick={onResetGame}
            disabled={isSubmitting}
            sx={(theme) => ({
              flex: 1,
              padding: `${theme.spacing(1.5)} 0`,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                boxShadow: `0 4px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgba(255, 152, 0, 0.3)"
                    : "rgba(0, 0, 0, 0.2)"
                }`,
              },
            })}
          >
            Skip & Play Again
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ScoreSubmit;
