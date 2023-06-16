import cs from "./general";

const background = {
  main: "#010609",
};

export const darkTheme = {
  mode: "dark",
  colors: {
    white: cs.white,
    black: cs.black,
    background,
    ...cs.primary,
    ...cs.secondary,
  },
};

export default darkTheme;
