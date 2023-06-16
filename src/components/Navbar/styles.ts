import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainNav = styled.nav`
  z-index: 14;
  height: 90px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
  box-shadow: 0px 2px 20px -10px ${({ theme }) => theme.colors.primary200};
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary200};
  font-size: ${({ theme }) => theme.typography.fontSize.xxl}px;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.colors.primary200};
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
