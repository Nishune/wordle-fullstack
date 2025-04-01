import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
});

export const NavLinksContainer = styled(Box)({
  display: "flex",
  gap: 16,
});

export const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isActive",
})(({ theme, isActive }) => ({
  fontSize: "large",
  fontWeight: isActive ? "bold" : "normal",
  borderBottom: isActive ? `2px solid ${theme.palette.common.white}` : "none",
  color: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.action.hover || "rgba(255, 255, 255, 0.1)",
  },
}));
