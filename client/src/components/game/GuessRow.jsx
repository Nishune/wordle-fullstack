import React from "react";
import { Box } from "@mui/material";
import LetterBox from "./LetterBox";

//Feedback prop comes from GameBoard-component
function GuessRow({ feedback }) {
  //Loops through every letter-feedback and renders a Letterbox
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing(1),
        justifyContent: "center",
        width: "100%",
      })}
    >
      {feedback.map((item, index) => (
        <LetterBox key={index} letter={item.letter} result={item.result} /> //letter item.letter sens the character to Letterbox, alkso sens in result to chose color/style.
      ))}
    </Box>
  );
}

export default GuessRow;
