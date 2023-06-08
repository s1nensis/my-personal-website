import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PersonalStudies from "./pages/PersonalStudies";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./theme";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const [currentTheme, setCurrentTheme] = useState<any>(theme.dark);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === theme.dark ? theme.light : theme.dark);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/studies",
      element: <PersonalStudies />,
    },
  ]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
