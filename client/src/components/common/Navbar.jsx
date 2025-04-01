import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

function Navigation() {
  const location = useLocation();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              borderBottom:
                location.pathname === "/" ? "2px solid white" : "none",
            }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            color="inherit"
            sx={{
              fontWeight: location.pathname === "/about" ? "bold" : "normal",
              borderBottom:
                location.pathname === "/about" ? "2px solid white" : "none",
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
