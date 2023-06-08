import { Global, css } from "@emotion/react";

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
`;

const GlobalStyles: React.FC = () => <Global styles={globalStyles} />;

export default GlobalStyles;
