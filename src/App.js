import React from "react";
import { ThemeProvider } from "theme-ui";
import { useRoutes } from "react-router-dom";
import "./styles/App.css";
import routes from "./routes";
import theme from "./styles/theme";

function App() {
  const router = useRoutes(routes);
  return <ThemeProvider theme={theme}>{router}</ThemeProvider>;
}

export default App;
