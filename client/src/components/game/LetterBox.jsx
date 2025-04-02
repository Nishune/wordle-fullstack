import React from "react";
import { Box } from "@mui/material";

//These props (letter & result) comes from GuessRow component.
function LetterBox({ letter, result }) {
  // Basstilen för alla tiles
  const baseTileStyle = {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "4px",
    transition: "all 0.3s ease",
  };

  // Specifika stilar baserade på resultatet
  const getTileStyle = () => {
    switch (result) {
      case "correct":
        return {
          ...baseTileStyle,
          backgroundColor: "#4CAF50",
          color: "white",
          border: "2px solid #4CAF50",
        };
      case "misplaced":
        return {
          ...baseTileStyle,
          backgroundColor: "#FF9800",
          color: "white",
          border: "2px solid #FF9800",
        };
      case "incorrect":
        return {
          ...baseTileStyle,
          backgroundColor: "#f6330a",
          color: "white",
          border: "2px solid #f6330a",
        };
      case "empty":
        return (theme) => ({
          ...baseTileStyle,
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          border: "2px solid",
          borderColor: letter
            ? theme.palette.primary.main
            : theme.palette.text.disabled,
        });
    }
  };

  return <Box sx={getTileStyle()}>{letter}</Box>;
}

export default LetterBox;
