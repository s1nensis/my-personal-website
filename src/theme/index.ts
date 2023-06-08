import { createTheme } from "@mui/material/styles";
import darkTheme from "./dark";
import lightTheme from "./light";

const light = createTheme({ ...lightTheme });
const dark = createTheme({ ...darkTheme });

export const theme = {
  light,
  dark,
};
