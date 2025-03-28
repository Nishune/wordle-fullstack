import React from "react";
import { Typography, Box, Button, Paper, Grid } from "@mui/material";

function HomePage() {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          backgroundImage: "linear-gradient(to bottom right, #f5f5f5, #e0e0e0)",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 4, color: "#2e7d32" }}
        >
          Wordle Game!
        </Typography>

        <Typography variant="h5" sx={{ mb: 4 }}>
          Testa din ordkunskap med ett klassiskt ordspel
        </Typography>

        <Grid container justifyContent="center" spacing={3} sx={{ mb: 4 }}>
          <Grid item>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#6aaa64",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              W
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#c9b458",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              O
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#787c7e",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              R
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#6aaa64",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              D
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#6aaa64",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              L
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#6aaa64",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              E
            </Box>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          size="large"
          sx={{
            py: 1.5,
            px: 4,
            fontSize: "1.2rem",
            fontWeight: "bold",
            boxShadow: 3,
          }}
        >
          Starta Spelet
        </Button>
      </Paper>
    </Box>
  );
}

export default HomePage;
