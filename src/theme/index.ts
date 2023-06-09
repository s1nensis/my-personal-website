import darkTheme from "./colors/dark";
import lightTheme from "./colors/light";
import { spacings, sizes } from "./sizes";
import { typography } from "./typography";

const themeConfigs = { spacings, sizes, typography };
export type ITheme = typeof themeConfigs & (typeof lightTheme | typeof darkTheme);

const light = { ...lightTheme, ...themeConfigs };
const dark = { ...darkTheme, ...themeConfigs };

export const theme = {
  light,
  dark,
};
