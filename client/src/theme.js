import { createTheme } from "@mui/material/styles";

// Skapa och exportera ett anpassat tema
const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // Grön färg
      light: "#60ad5e",
      dark: "#005005",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff9800", // Orange färg
      light: "#ffc947",
      dark: "#c66900",
      contrastText: "#000000",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: "none", // Tar bort automatisk versaler på knappar
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", // Anpassad skugga
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Rundade hörn på knappar
          padding: "8px 16px",
        },
      },
    },
  },
});

export default theme;
