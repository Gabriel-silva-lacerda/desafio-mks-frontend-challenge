import styled from "styled-components";

export const Container = styled.section`
  padding-top: 7rem;
  padding-bottom: 10rem;
  min-height: 100vh;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 996px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 568px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
