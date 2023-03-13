import styled from "styled-components";

export const FooterHomePageStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  Height: 122px;
  margin: 10rem 0 0 0;
  background-color: #e0e0e0;
  font-family: "Montserrat", sans-serif;
  gap:10px;

  p{
    font-size:14px;
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

export const FooterContainer = styled.div`
  border-bottom: 1px solid #FFFFFF;
  margin-top:10px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap:8px;
  margin-bottom:10px;
  p {
    font-size:14px;
  }
`