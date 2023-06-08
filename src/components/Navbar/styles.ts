import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.background};
`;
