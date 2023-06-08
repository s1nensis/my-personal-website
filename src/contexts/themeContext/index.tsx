/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as SThemeProvider } from "styled-components";
import { ITheme, theme } from "../../theme";

interface ThemeContextProps {
  currentTheme: ITheme;
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
  const [currentTheme, setCurrentTheme] = useState<ITheme>(theme.dark);

  const toggleTheme = () => {
    if (!currentTheme.mode) return;
    localStorage.setItem("theme", currentTheme.mode === "dark" ? "light" : "dark");
    setCurrentTheme(currentTheme.mode === "dark" ? theme.light : theme.dark);
  };

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("theme");
    if (currentThemeMode === "dark") {
      setCurrentTheme(theme.dark);
    } else {
      setCurrentTheme(theme.light);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <SThemeProvider theme={currentTheme}>{children}</SThemeProvider>
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
