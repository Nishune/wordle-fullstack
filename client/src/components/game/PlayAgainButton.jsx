import React from "react";
import { Box, Button } from "@mui/material";
import { Refresh } from "@mui/icons-material";

//The prop onResetGames comes from HomePage.jsx -> GameBoard component.
function PlayAgainButton({ onResetGame }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "16px",
      }}
    >
      <Button
        variant="contained"
        onClick={onResetGame} //Runs the function from HomePage.jsx and resets the game.
        startIcon={<Refresh />}
        sx={(theme) => ({
          padding: "12px 24px",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderRadius: "8px",
          boxShadow: `0 4px 8px ${
            theme.palette.mode === "dark"
              ? "rgba(255, 152, 0, 0.3)"
              : "rgba(0, 0, 0, 0.2)"
          }`,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        })}
      >
        Play Again!
      </Button>
    </Box>
  );
}

export default PlayAgainButton;
