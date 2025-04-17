import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF9800",
      light: "#FFB74D",
      dark: "#F57C00",
      contrastText: "#000000",
    },
    secondary: {
      main: "#000000",
      light: "#212121",
      dark: "#000000",
      contrastText: "#FF9800",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E0E0E0",
    },
    action: {
      active: "#FF9800",
      hover: "rgba(255, 152, 0, 0.1)",
    },

    warning: {
      main: "#FF6D00",
    },
    error: {
      main: "#D84315",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
    h5: {
      fontWeight: 700,
      color: "#FF9800",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "1 4px 8px rgba(255, 152, 0, 0.3)",
          backgroundColor: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "8px 16px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#F57C00",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 4px 20px rgba(255, 152, 0, 0.15)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#FF9800",
          "&.Mui-checked": {
            color: "#FF9800",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF9800",
          },
        },
      },
    },
  },
});

export default theme;
