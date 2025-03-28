import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Wordle Game
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              borderBottom:
                location.pathname === "/" ? "2px solid white" : "none",
            }}
          >
            Start Game
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/highscore"
            sx={{
              fontWeight:
                location.pathname === "/highscore" ? "bold" : "normal",
              borderBottom:
                location.pathname === "/highscore" ? "2px solid white" : "none",
            }}
          >
            Highscore
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
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

export default Navbar;
