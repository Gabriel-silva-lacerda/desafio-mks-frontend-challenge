import styled from "styled-components";
import { theme } from "../../theme/style";

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.colors.white};

  margin-top: 2rem;

  border-radius: 0.5rem;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 1rem;

  position: relative;

  img {
    width: 46px;
    height: 57px;
  }
`;

export const DeleteProduct = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -5px;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 0.7rem;
  border: none;
  cursor: pointer;
`;

export const ProductName = styled.span`
  color: ${theme.colors.secondary};

  font-size: 0.813rem;
  font-style: normal;
  font-weight: 400;

  max-width: 100px;
`;

export const QuantityCotainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    &:first-child {
      font-size: 0.413rem;
    }
  }
`;

export const CountContainer = styled.div`
  border: 0.019rem solid #bfbfbf;
  border-radius: 0.25rem;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  button {
    width: 20px;
    height: 17px;
    background: transparent;
    border: none;
    font-size: 0.6rem;
    position: relative;
    cursor: pointer;
    &::before {
      content: "";
      background: #bfbfbf;
      width: 0.2px;
      height: 11.5px;
      position: absolute;
    }
    &:first-child {
      &::before {
        left: 15px;
      }
    }
    &:last-child {
      &::before {
        right: 15px;
      }
    }
  }

  span {
    font-size: 0.5rem;
  }
`;

export const ProductPrice = styled.span`
  color: ${theme.colors.black};
  font-size: 0.875rem;
  font-weight: 700;
`;
