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
      return <MdSunny />;
    }
    return <MdBrightness2 />;
  }, [theme.mode]);

  const navigation = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Portfolio",
      key: "/portfolio",
    },
    {
      label: "Personal Studies",
      key: "/personal-studies",
    },
    {
      icon: renderThemeIcon(),
      key: "theme",
    },
  ];

  const handleItemClick = ({ key }: any) => {
    if (key) navigate(key);
    if (key === "theme") toggleTheme();
  };

  return (
    <>
      <S.Navbar mode="horizontal" items={navigation} onClick={(item) => handleItemClick(item)} />
    </>
  );
};

export default Navbar;
