import cs from "./general";

const background = {
  main: "#66A3CA",
};

export const lightTheme = {
  mode: "light",
  colors: {
    white: cs.white,
    black: cs.black,
    background,
    ...cs.primary,
    ...cs.secondary,
  },
};

export default lightTheme;
