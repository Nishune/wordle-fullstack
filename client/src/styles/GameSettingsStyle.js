// src/styles/GameSettingsStyles.js
import { styled } from "@mui/material/styles";
import { Paper, Typography, Box, FormControl, Button } from "@mui/material";

// Huvudcontainer för inställningar
export const SettingsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  maxWidth: 500,
  width: "100%",
  margin: "0 auto",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 152, 0, 0.2)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
}));

// Rubrik för inställningar
export const SettingsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

// Form container
export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

// Select för ordlängd
export const WordLengthSelect = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: "100%",
}));

// Start Game-knapp
export const StartGameButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.5)} 0`,
  textTransform: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  boxShadow: `0 4px 8px ${
    theme.palette.mode === "dark"
      ? "rgba(255, 152, 0, 0.3)"
      : "rgba(0, 0, 0, 0.2)"
  }`,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
