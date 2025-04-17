import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import { Box, TextField, Button } from "@mui/material";

//wordlength prop comes from HomePage -> GameBoard component.
//OnMakeGuess prop is a callback-function that comes from HomePage -> GameBoard component.
// disabled = false comes from GameBoard component.

function GuessInput({ wordLength, onMakeGuess, disabled = false }) {
  //State for the users current guess, default state is empty string.
  const [currentGuess, setCurrentGuess] = useState("");

  //function that handles changes in the textfield.
  const handleInputChange = (e) => {
    //takes the value from the input-element and filters out everything thats not characters and convert to uppercase.
    const value = e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase();
    //Check that the guess is not longer than the word length.
    if (value.length <= wordLength) {
      //Updates the state with the guess.
      setCurrentGuess(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the site from reload on submit.

    //Checks if the guess has the exact number of characters. if not it returns.
    if (currentGuess.length !== wordLength) {
      return;
    }
    //calls the callback function from props with the current guess
    onMakeGuess(currentGuess);
    //resets the guessfied.
    setCurrentGuess("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={(theme) => ({
        display: "flex",
        width: "100%",
        gap: theme.spacing(2),
        alignItems: "center",
      })}
    >
      <TextField
        fullWidth
        value={currentGuess} //Sets the current textfield value to currentguess-state.
        onChange={handleInputChange} //Activates handleInputChange when the textfield changes.
        placeholder={`Enter a ${wordLength}-letter word`} //Shows a dynamic placeholder based on the secret word length.
        disabled={disabled} //Inactivates the textfield if the diabled prop is true.
        variant="outlined"
        autoFocus
        slotProps={{
          input: {
            maxLength: wordLength, //Restricts the textfields length to the word length.
          },
        }}
        sx={(theme) => ({
          "& .MuiInputBase-input": {
            textTransform: "uppercase",
            fontSize: theme.typography.fontSize * 1.1,
            letterSpacing: theme.spacing(0.13),
          },
        })}
      />

      <Button
        type="submit" //Makes the button to a submit button
        variant="contained"
        color="primary"
        disabled={currentGuess.length !== wordLength || disabled} //Deactivated the button if the guess is not correct length || disabled prop = true
        endIcon={<Send />}
        sx={(theme) => ({
          padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
          textTransform: "none",
          fontWeight: "bold",
        })}
      >
        Guess
      </Button>
    </Box>
  );
}

export default GuessInput;
