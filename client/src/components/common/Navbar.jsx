import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

function Navigation() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#000000", // Svart färg från ditt tema
        boxShadow: "0 4px 8px rgba(255, 152, 0, 0.3)", // Orange skugga från ditt tema
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex" }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{
              color: "#FFFFFF", // Vit text
              fontSize: "1.1rem",
              fontWeight: location.pathname === "/" ? 700 : 500,
              padding: "12px 16px",
              borderRadius: 0, // Rektangulära knappar
              borderBottom:
                location.pathname === "/"
                  ? "2px solid #FF9800"
                  : "2px solid transparent",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 152, 0, 0.1)", // Orange hover från ditt tema
                borderBottom: "2px solid #FF9800",
              },
              marginLeft: 1,
            }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            sx={{
              color: "#FFFFFF", // Vit text
              fontSize: "1.1rem",
              fontWeight: location.pathname === "/about" ? 700 : 500,
              padding: "12px 16px",
              borderRadius: 0, // Rektangulära knappar
              borderBottom:
                location.pathname === "/about"
                  ? "2px solid #FF9800"
                  : "2px solid transparent",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 152, 0, 0.1)", // Orange hover från ditt tema
                borderBottom: "2px solid #FF9800",
              },
              marginLeft: 1,
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
