import React from "react";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import ThemeProvider from "./contexts/themeContext";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
