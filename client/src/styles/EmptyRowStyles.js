// src/styles/EmptyRowStyles.js
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const EmptyRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "center",
  width: "100%",
}));
