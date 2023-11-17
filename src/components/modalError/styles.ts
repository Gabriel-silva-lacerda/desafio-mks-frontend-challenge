import styled from "styled-components";
import { theme } from "../../theme/style";

interface ModalProps {
  isOpen: boolean;
}

export const ModalError = styled.div<ModalProps>`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  div {
    background: white;
    max-width: 600px;
    width: 80vw;
    padding: 40px;
    border: 10px solid ${theme.colors.primary};
    box-shadow: 0 0 0 10px ${theme.colors.white};
    position: relative;
    box-sizing: border-box;

    button {
      top: -30px;
      right: -30px;
      width: 50px;
      height: 50px;
      border: 4px solid white;
      border-radius: 50%;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
      background: ${theme.colors.primary};
      cursor: pointer;
      position: absolute;
      font-size: 1.5rem;
      color: ${theme.colors.white};
    }

    h2 {
      text-align: center;
    }
  }
`;