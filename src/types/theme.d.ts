import { ThemeOptions } from "@mui/material/styles";

export interface CustomTheme extends ThemeOptions {
  palette: {
    mode: "light" | "dark";
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    background: {
      default: string;
    };
  };
}
