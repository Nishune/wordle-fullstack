import React from "react";
import { Alert, Box } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

function ErrorMessage({ message }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto 16px auto",
      }}
    >
      <Alert
        severity="error"
        variant="filled"
        icon={<ErrorIcon />}
        sx={{
          borderRadius: 2,
          fontWeight: 500,
          fontSize: "1rem",
          boxShadow: "0 2px 10px rgba(214, 35, 0, 0.2)",
          animation: "fadeIn 0.3s ease-in-out",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(-10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {message}
      </Alert>
    </Box>
  );
}

export default ErrorMessage;
