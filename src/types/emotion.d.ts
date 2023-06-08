import "@emotion/react";
import { TTheme } from "./theme";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends TTheme {}
}
