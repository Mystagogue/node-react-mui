import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customTheme = createTheme(theme);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
