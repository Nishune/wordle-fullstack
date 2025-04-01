import { createTheme } from "@mui/material/styles";

// Orange och svart tema
const theme = createTheme({
  palette: {
    mode: "dark", // Mörk bas för temat
    primary: {
      main: "#FF9800", // Orange som primärfärg
      light: "#FFB74D",
      dark: "#F57C00",
      contrastText: "#000000", // Svart text på orange bakgrund
    },
    secondary: {
      main: "#000000", // Svart som sekundärfärg
      light: "#212121",
      dark: "#000000",
      contrastText: "#FF9800", // Orange text på svart bakgrund
    },
    background: {
      default: "#121212", // Mörk bakgrund för sidor
      paper: "#1E1E1E", // Mörk bakgrund för komponenter
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#E0E0E0",
    },
    action: {
      active: "#FF9800",
      hover: "rgba(255, 152, 0, 0.1)",
    },
    // Halloween-accent om du vill ha lite extra flair
    warning: {
      main: "#FF6D00", // Mörkare orange för varningar
    },
    error: {
      main: "#D84315", // Mörk orange-röd för fel
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: "none", // Tar bort automatisk versaler på knappar
      fontWeight: 500,
    },
    h5: {
      fontWeight: 700,
      color: "#FF9800", // Orange rubriker
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "1 4px 8px rgba(255, 152, 0, 0.3)", // Orange skugga
          backgroundColor: "#000000", // Svart AppBar
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
            backgroundColor: "#F57C00", // Mörkare orange vid hover
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
          color: "#FF9800", // Orange checkbox
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
            borderColor: "#FF9800", // Orange fokuserad border
          },
        },
      },
    },
  },
});

export default theme;
