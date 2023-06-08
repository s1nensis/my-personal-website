import * as React from "react";

import { useTheme } from "../../contexts/themeContext";
import * as S from "./styles";

const Navbar: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <S.NavbarContainer>
      <h1>OLÀ</h1>
      <button onClick={toggleTheme}>Olá mundo</button>
    </S.NavbarContainer>
  );
};

export default Navbar;
