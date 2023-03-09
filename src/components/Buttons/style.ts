import styled, { css } from "styled-components";

export const ButtonCloseStyled = styled.button`
  width: auto;
  height: 36px;
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
      case 'green':
        return css`
          background-color: var(--primary-green);
          color: var(--white-color);
        `;
      default:
        return css`
          background-color: var(--primary-red);
          color: var(--white-color);
        `;
    }
  }}
`;

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
      case 'blue':
        return css`
          color: var(--primary-cyan);
        `;
      default:
        return css`
          color: var(--white-color);
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
  background-color: var(--primary-green);
  color: var(--white-color);
`;

export const ButtonRegisterStyled = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  background-color: var(--primary-red);
  color: var(--white-color);
`;

export const ButtonModalCloseStyled = styled.button`
  width: auto;
  height: auto;
  background-color: transparent;
  color: var(--black-color);
  font-size: 20px;
  font-weight: 100;
  position: absolute;
  right: 0;
  top: -10px;
  cursor: pointer;
`;
