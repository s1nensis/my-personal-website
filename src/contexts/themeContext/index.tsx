/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { CustomTheme } from "../../types/theme";

interface ThemeContextProps {
  currentTheme: CustomTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: theme.dark,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<CustomTheme>(theme.dark);

  const toggleTheme = () => {
    if (!currentTheme.palette) return;
    setCurrentTheme(currentTheme.palette.mode === "dark" ? theme.light : theme.dark);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export default ThemeProvider;
