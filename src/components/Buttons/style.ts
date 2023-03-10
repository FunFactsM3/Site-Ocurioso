import styled, { css } from "styled-components";

//TODO: VAR COLOR
export const ButtonCloseStyled = styled.button`
  width: auto; height: 36px;
  padding: 10px 8px;

  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  gap: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (min-width: 1000px) {
    width: auto; height: 40px;
    padding: 10px 15px;
  }

  ${({color}) => {
    switch (color) {
      case 'green':
        return css`
          background-color: ${({theme}) => theme.color.primaryGreen};
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
      default:
        return css`
          background-color: ${({theme}) => theme.color.primaryRed};
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
    }
  }}
`;

export const ButtonOpenStyled = styled.button`
  width: auto; height: 36px;
  margin-right: 20px;
  background: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  gap: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({color}) => {
    switch (color) {
      case 'blue':
        return css`
          color: ${({theme}) => theme.color.primaryCyan};
        `;
      default:
        return css`
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
    }
  }}
`;

export const ButtonLoginStyled = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  background-color: ${({theme}) => theme.color.primaryGreen};
  color: ${({theme}) => theme.color.primaryGreyLight};

  @media screen and (min-width: 1000px) {
    width: 100%; height: 40px;
  }
`;

export const ButtonRegisterStyled = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  background-color: ${({theme}) => theme.color.primaryRed};
  color: ${({theme}) => theme.color.primaryGreyLight};

  @media screen and (min-width: 1000px) {
    width: 100%; height: 40px;
  }
`;

export const ButtonModalCloseStyled = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  color: ${({theme}) => theme.color.primaryGreyDark};
  font-size: 20px;
  font-weight: 100;

  z-index: 1;
  position: absolute;
  right: 15px; top: 10px;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    position: absolute;

    right: 15px; top: 10px;
  }
`