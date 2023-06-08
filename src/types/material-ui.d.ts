/* eslint-disable @typescript-eslint/no-empty-interface */
// import { Theme, ThemeOptions } from "@mui/material/styles";
import { CustomTheme } from "./theme";

declare module "@mui/styles" {
  interface Theme extends CustomTheme {}

  interface ThemeOptions extends CustomTheme {}
}
