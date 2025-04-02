import React from "react";
import { Box, CircularProgress } from "@mui/material";

function LoadingSpinner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        width: "100%",
      }}
    >
      <CircularProgress
        sx={{
          color: "primary.main",

          "& .MuiCircularProgress-svg": {
            width: "60px",
            height: "60px",
          },
        }}
        thickness={4}
        size={60}
      />
    </Box>
  );
}

export default LoadingSpinner;
