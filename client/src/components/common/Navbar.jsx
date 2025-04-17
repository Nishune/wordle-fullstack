import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

function Navigation() {
  const location = useLocation();

  // VBase style for the buttons in the navbar
  const buttonBaseStyle = (isActive) => (theme) => ({
    color: theme.palette.common.white,
    fontSize: "1.1rem",
    fontWeight: isActive ? 700 : 500,
    padding: "12px 16px",
    borderRadius: 0,
    borderBottom: isActive
      ? `2px solid ${theme.palette.primary.main}`
      : "2px solid transparent",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}10`,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    marginLeft: 1,
  });

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex" }}>
          <Button
            component={RouterLink}
            to="/"
            sx={buttonBaseStyle(location.pathname === "/")}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            sx={buttonBaseStyle(location.pathname === "/about")}
          >
            About
          </Button>

          <Button component="a" href="/highscore" sx={buttonBaseStyle(false)}>
            Highscore
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
