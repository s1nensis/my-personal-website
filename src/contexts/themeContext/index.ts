/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { theme } from "../../theme";

export const ThemeContext = createContext({
  currentTheme: theme.dark,
  toggleTheme: () => {},
});
