// src/styles/GameBoardStyles.js
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const GameBoardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  maxWidth: 600,
  width: "100%",
  margin: "0 auto",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 152, 0, 0.2)"
      : "rgba(0, 0, 0, 0.1)"
  }`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const BoardGrid = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const InputContainer = styled(Box)({
  width: "100%",
  marginTop: "16px",
});
