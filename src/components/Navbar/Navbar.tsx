import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MdBrightness2, MdSunny } from "react-icons/md";

import { useTheme } from "../../contexts/themeContext";
import * as S from "./styles";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();

  const renderThemeIcon = useCallback(() => {
    if (theme.mode === "dark") {
      return <MdSunny color="red" />;
    }
    return <MdBrightness2 />;
  }, [theme.mode]);

  return (
    <>
      <S.MainNav>
        <S.Hamburger />
        <S.Menu>
          <S.MenuLink to={"/"}>Home</S.MenuLink>
          <S.MenuLink to={"/personal-studios"}>Portfolio</S.MenuLink>
          <S.MenuLink to={"/portfolio"}>Personal Studies</S.MenuLink>
          <div onClick={toggleTheme}>{renderThemeIcon()}</div>
        </S.Menu>
      </S.MainNav>
    </>
  );
};

export default Navbar;
