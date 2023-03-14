import styled, { css } from "styled-components";

interface IStyle {
  type: string;
}

export const LoginPageStyled = styled.div`
  background-image: url('https://i.imgur.com/1OXBUyP.png');
  background-position-y: -35px;
  background-size: cover;
  height: 100vh;

  position: relative;
  h3{
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 400;

    color: ${({theme})=>theme.color.primaryGreyLight};

    position: absolute;
    right: 40%;
  }

  @media screen and (min-width: 760px) {
    background: url("https://i.imgur.com/1OXBUyP.png") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  }

  @media screen and (min-width: 1000px) {
    background-image: url("https://i.imgur.com/1OXBUyP.png") center center / cover no-repeat fixed;;
    background-size: 100%;
    height: 100vh;

    h3{
      position: absolute;
      right: 45%;
    }
    
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

`

export const MainStyle = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;


    div{
      gap: 15px;
      display: flex;
      flex-direction: column;
      padding-left: 40px;
      width: 90%;
      align-items: flex-start;
    }

  @media screen and (min-width: 600px) {
    width: 450px; height: 400px;
    margin-left: 20px;
    gap: 25px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    width: 350px; height: 400px;
    margin-left: 20px;
    gap: 25px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    flex-direction: column;
  
  }

  @media screen and (min-width: 1000px) {
    width: 470px; height: 400px;
    margin: 0 0 0 50px;

    gap: 25px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    width: 570px; height: 400px;
    margin-left: 90px;
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
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
      case "h2":
        return css`
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: -0.04em;
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
      default:
        return css`
          color: ${({theme}) => theme.color.primaryGreyLight};
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
    gap: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
