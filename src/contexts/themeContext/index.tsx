/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as SThemeProvider } from "styled-components";
import { ITheme, theme as customTheme } from "../../theme";

interface ThemeContextProps {
  theme: ITheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: customTheme.dark,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<ITheme>(
    storedTheme === "dark" ? customTheme.dark : customTheme.light,
  );

  const toggleTheme = () => {
    if (!theme.mode) return;
    localStorage.setItem("theme", theme.mode === "dark" ? "light" : "dark");
    setTheme(theme.mode === "dark" ? customTheme.light : customTheme.dark);
  };

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("theme");
    if (currentThemeMode === "dark") {
      setTheme(customTheme.dark);
    } else {
      setTheme(customTheme.light);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SThemeProvider theme={theme}>{children}</SThemeProvider>
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
