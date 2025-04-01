// src/styles/GuessInputStyles.js
import { styled } from "@mui/material/styles";
import { Box, TextField, Button } from "@mui/material";

export const GuessInputForm = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: theme.spacing(2),
  alignItems: "center",
}));

export const GuessTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    textTransform: "uppercase",
    fontSize: theme.typography.fontSize * 1.1,
    letterSpacing: theme.spacing(0.13),
  },
}));

export const GuessButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  textTransform: "none",
  fontWeight: "bold",
}));
