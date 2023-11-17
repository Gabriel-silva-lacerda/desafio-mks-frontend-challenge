import styled from "styled-components";

const FooterMKS = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background: #eee;
  span {
    display: block;
  }
`;

export const Footer = () => {
  return (
    <FooterMKS>
      <span>MKS sistemas © Todos os direitos reservados</span>
    </FooterMKS>
  );
};
