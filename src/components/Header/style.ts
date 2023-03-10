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
  justify-content: space-around;
  flex-direction: row;

  border-bottom: 1px solid ${({theme}) => theme.color.primaryGreyDark};

  .change{
    display: none !important;;
  }
  @media screen and (min-width: 1000px) {
    gap: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .change{
    display: block !important;;
    }
    
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
          color: ${({theme}) => theme.color.primaryCyan};
        `;
      default:
        return css`
          color: ${({theme}) => theme.color.primaryGreyLight};
        `;
    }
  }}
`;

export const StyledButtonRegister = styled.button<IStyledParagraphProps>`
  height: 36px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  color: ${({theme}) => theme.color.whiteColor};

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
          background-color: ${({theme}) => theme.color.primaryGreen};
        `;
      default:
        return css`
          background-color: ${({theme}) => theme.color.primaryRed};
        `;
    }
  }}
`;

export const StyledModalClose = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.color.primaryGreyDark};
  font-size: 20px;
  font-weight: 100;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
