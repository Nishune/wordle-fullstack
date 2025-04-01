import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

function Navigation() {
  const location = useLocation();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              fontSize: "large",
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
              fontSize: "large",
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
