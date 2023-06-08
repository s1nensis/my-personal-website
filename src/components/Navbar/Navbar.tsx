import * as React from "react";

import { AppBar } from "@mui/material";
import Brightness4 from "@mui/icons-material/Brightness4";

import { useTheme } from "../../contexts/themeContext";

const Navbar: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Brightness4 onClick={toggleTheme} />
    </AppBar>
  );
};

export default Navbar;
