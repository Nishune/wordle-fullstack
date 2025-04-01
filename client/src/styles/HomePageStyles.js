import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const HomePageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px",
  width: "100%",
  maxWidth: "100%",
  minHeight: "100vh",
});

export const GameTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
  color: theme.palette.primary.main,
  textAlign: "center",
}));

export const GameContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
});
