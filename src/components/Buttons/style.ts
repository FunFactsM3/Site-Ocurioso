import styled, { css } from "styled-components";


export const ButtonCloseStyled = styled.button`
  width: auto; height: 36px;
  padding: 10px 19px;

  border-radius: 12px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;

  gap: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({color}) => {
  switch (color) {
    case'green':
    return css`
      background-color: #82D74D;
      color: rgb(255, 255, 255);
    `;
    default:
    return css`
      background-color: rgb(233, 66, 90);
      color: rgb(255, 255, 255);
    `
  }
}}`;

export const ButtonOpenStyled = styled.button`
  width: auto;
  height: 36px;
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
      case'blue':
      return css`
        color: #1DC1EB;
;
      `;
      default:
      return css`
        color: rgb(255, 255, 255);
      `
    }
}}`

export const ButtonLoginStyled = styled.button`
  width: 100%; height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  background-color: #82D74D;
  color: rgb(255, 255, 255);
`;

export const ButtonRegisterStyled = styled.button`
  width: 100%; height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  background-color: rgb(233, 66, 90);
  color: rgb(255, 255, 255);
`;

export const ButtonModalCloseStyled = styled.button`
  width: auto ; height: auto ;

  background-color: transparent;
  color:black;

  font-size: 20px;
  font-weight: 100;

  position: absolute;
  right: 0; top: -10px;
  cursor: pointer;
`