import styled from "styled-components";

export const FooterHomePageStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 10rem 0 0 0;

  background-color: #e0e0e0;

  font-family: "Montserrat", sans-serif;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #f6f5f4;
    p {
      margin: 0.9rem;
    }
  }

  @media (min-width: 1023px) {
    margin: 16rem 0 0 0;
  }

  @media (min-width: 1300px) {
    margin: 18rem 0 0 0;
  }

  @media (min-width: 1400px) {
    margin: 35rem 0 0 0;
  }
`;
