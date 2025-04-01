import React from "react";
import { ResetContainer, ResetButton } from "../../styles/ButtonStyles";
import { Refresh } from "@mui/icons-material";

//The prop onResetGames comes from HomePage.jsx -> GameBoard component.
function PlayAgainButton({ onResetGame }) {
  return (
    <ResetContainer>
      <ResetButton
        variant="contained"
        onClick={onResetGame} //Runs the function from HomePage.jsx and resets the game.
        startIcon={<Refresh />}
      >
        Play Again!
      </ResetButton>
    </ResetContainer>
  );
}

export default PlayAgainButton;
