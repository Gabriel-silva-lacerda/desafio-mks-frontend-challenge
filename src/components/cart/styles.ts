import styled from "styled-components";
import { theme } from "../../theme/style";

export const CartContainer = styled.section`
  width: 100%;
  max-width: 400px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem 0 0 0;
  height: 100vh;
  background: ${theme.colors.primary};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  /* transform: translate(110%, 0); */
  transition: all 400ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartProductContainer = styled.div`
  overflow: auto;
  padding: 0 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 1.688rem;
    max-width: 170px;
    color: ${theme.colors.white};
  }

  button {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
`;

export const PriceContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    span {
      color: ${theme.colors.white};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  button {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: none;
    padding: 2rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    width: 100%;
  }
`;
