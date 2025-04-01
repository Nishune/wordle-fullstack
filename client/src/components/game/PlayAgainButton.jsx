import React from "react";
import { ResetContainer, ResetButton } from "../../styles/ButtonStyles";
import { Refresh } from "@mui/icons-material";

function PlayAgainButton({ onResetGame }) {
  return (
    <ResetContainer>
      <ResetButton
        variant="contained"
        onClick={onResetGame}
        startIcon={<Refresh />}
      >
        Play Again!
      </ResetButton>
    </ResetContainer>
  );
}

export default PlayAgainButton;
