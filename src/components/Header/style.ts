import styled, { css } from "styled-components";

interface IStyledParagraphProps {
  background?: string;
  color?: string;
  gap?: string;
  size?: string;
  margin?: string;
  fontColor?: "gray" | "red";
  textAlign?: "center" | "left" | "right";
}

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 10vh;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-bottom: 1px solid var(--white-color);

  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    img {
      padding-right: 50%;
    }
  }
`;

export const HeaderFormStyle = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledButtonLogin = styled.button<IStyledParagraphProps>`
  background: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  width: 103px;
  height: 36px;
  text-decoration: underline;

  ${({ color }) => {
    switch (color) {
      case "blue":
        return css`
          color: var(--primary-cyan);
        `;
      default:
        return css`
          color: var(--primary-grey-light);
        `;
    }
  }}
`;

export const StyledButtonRegister = styled.button<IStyledParagraphProps>`
  height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  color: var(--white-color);

  ${({ size }) => {
    switch (size) {
      case "one":
        return css`
          width: 129px;
        `;
      default:
        return css`
          width: 103px;
        `;
    }
  }}

  ${({ background }) => {
    switch (background) {
      case "green":
        return css`
          background-color: var(--primary-green);
        `;
      default:
        return css`
          background-color: var(--primary-red);
        `;
    }
  }}
`;

export const StyledModalClose = styled.button`
  background-color: transparent;
  color: var(--black-color);
  font-size: 20px;
  font-weight: 100;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
