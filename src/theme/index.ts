import darkTheme from "./dark";
import lightTheme from "./light";

export type ITheme = typeof lightTheme | typeof darkTheme;

const light = lightTheme;
const dark = darkTheme;

export const theme = {
  light,
  dark,
};
