import styled from "styled-components";
import { theme } from "../../theme/style";

export const ProductList = styled.li`
  list-style: none;
  background: ${theme.colors.white};
  border-radius: 0.5rem 0.5rem 0 0;
  padding-top: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 218px;
    height: 220px;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0;
  padding: 0 1rem;
  span {
    &:first-child {
      font-size: 1.3rem;
      color: ${theme.colors.secondary};
    }
    &:last-child {
      color: ${theme.colors.white};
      background: ${theme.colors.bgPrice};
      border-radius: 0.313rem;
      padding: 0.5rem;
      font-weight: 700;
    }
  }
`;

export const Description = styled.span`
  font-size: 0.825rem;
  color: ${theme.colors.secondary};
  font-weight: 300;
  padding: 0 1rem;
  margin-bottom: 1rem;
  display: block;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 0.7rem 0;

  border-radius: 0 0 0.5rem 0.5rem;
  border: none;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;

  cursor: pointer;
`;
