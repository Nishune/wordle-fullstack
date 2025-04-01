import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/common/Navbar";
import "./App.css";
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
