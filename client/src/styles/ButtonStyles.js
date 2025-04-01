// src/styles/ButtonStyles.js
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

// Container för reset-knappen
export const ResetContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "16px",
});

// Stilad knapp för Play Again
export const ResetButton = styled(Button)(({ theme }) => ({
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
}));
