import React from "react";
import { Box, Typography } from "@mui/material";

function GameMessage({ message }) {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        mb: 2,
      }}
    >
      <Typography
        variant="h6"
        color="primary.main"
        sx={{ fontWeight: "medium" }}
      >
        {message}
      </Typography>
    </Box>
  );
}

export default GameMessage;
