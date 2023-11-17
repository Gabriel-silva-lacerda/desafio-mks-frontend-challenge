import styled from "styled-components";
import { theme } from "../../theme/style";

export const Header = styled.header`
  background: ${theme.colors.primary};
  padding: 1.5rem 1rem;
`;

export const Nav = styled.nav`
  max-width: 1600px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  div {
    display: flex;
    gap: 0.5rem;
    h1 {
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-size: 2.5rem;
    }

    span {
      align-self: flex-end;
      font-size: 1.25rem;
      color: ${theme.colors.white};
      font-weight: 300;
      text-transform: capitalize;
      padding-bottom: 0.5rem;
    }
  }

  button {
    background: ${theme.colors.white};
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    span {
      font-size: 1.125rem;
      font-weight: 700;
    }
  }
`;
