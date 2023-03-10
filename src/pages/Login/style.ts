import styled, { css } from "styled-components";

interface IStyle {
  type: string;
}

export const LoginPageStyled = styled.div`
  background-image: url("/src/assets/background.png");
  background-position-y: -25px;
  background-position-x: -25px;
  background-size: cover;
  height: 100vh;

  @media screen and (min-width: 1000px) {
    background-image: url("/src/assets/background.png");
   background-size: 100%;
    background-position-y: -115px;
   background-position-x: 5px;
  }
`;

export const DivStyle = styled.div`
  width: 100vw;
  height: 85vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;
  @media screen and (min-width: 1000px){
    padding: 100px 0px 0px 0px;
  }
`

export const MainStyle = styled.main`
  width: 90%; height:65%;

  gap: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  position: relative;


  @media screen and (min-width: 1000px) {
    width: 500px; height: 400px;
    margin: 0 0 0 100px;

    gap: 25px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TextParagraphStyle = styled.p`
  color: ${({theme}) => theme.color.primaryCyan};

  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.04em;
`;

export const TextTitleStyle = styled.p<IStyle>`
  ${({ type }) => {
    switch (type) {
      case "h1":
        return css`
          font-family: "Dela Gothic One";
          font-size: 35px;
          font-weight: 400;
          line-height: 35px;
          letter-spacing: -0.03em;
          color: ${({theme}) => theme.color.whiteColor};
        `;
      case "h2":
        return css`
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.04em;
          color: ${({theme}) => theme.color.whiteColor};
        `;
      default:
        return css`
          color: ${({theme}) => theme.color.whiteColor};
          font-size: 10px;
        `;
    }
  }}
`;

export const SpaceButtonsStyle = styled.span`
  width: auto; height: 50px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center; 

  @media screen and (min-width: 1000px) {
    width: 55%;
    height: 50px;

    gap: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
