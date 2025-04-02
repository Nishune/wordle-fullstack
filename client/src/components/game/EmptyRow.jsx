import React from "react";
import LetterBox from "./LetterBox";
import { Box } from "@mui/material";

function EmptyRow({ length, currentGuess = "", isActive = false }) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing(1),
        justifyContent: "center",
        width: "100%",
      })}
    >
      {Array.from({ length }).map((_, index) => (
        <LetterBox
          key={index}
          letter={
            isActive && index < currentGuess.length ? currentGuess[index] : ""
          }
          result="empty"
        />
      ))}
    </Box>
  );
}

export default EmptyRow;
