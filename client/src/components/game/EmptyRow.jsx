import React from "react";
import { Box } from "@mui/material";
import LetterBox from "./LetterBox";

function EmptyRow({ length, currentGuess = "", isActive = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        width: "100%",
      }}
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
