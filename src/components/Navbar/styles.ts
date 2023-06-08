import { Menu, Button } from "antd";
import { styled } from "styled-components";

export const Navbar = styled(Menu)`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  && .ant-menu-item:hover::after {
    border-bottom: 0px solid transparent;
  }

  && .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0px;
    color: #b80012;
  }

  && .ant-menu-item-selected:after {
    border-bottom-width: 0px;
    border-bottom-color: transparent;
  }
`;

export const ToggleThemeButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
`;
