// App.js
import React from 'react';
import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
