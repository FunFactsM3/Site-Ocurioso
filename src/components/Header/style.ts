import styled, { css } from "styled-components";
interface IStyledParagraphProps {
  background?: string;
  color?: string;
  gap?: string;
  size?: string;
  margin?: string;
  fontColor?: 'gray' | 'red';
  textAlign?: 'center' | 'left' | 'right';
}

export const HeaderStyled = styled.div`
height:70px;
border-bottom: 1px solid #C3DCE3;
display:flex;
align-items:center;
justify-content:space-evenly;
gap:40%;
`
export const StyledButtonsSection = styled.button<IStyledParagraphProps>`
  display:flex;
  background:none;
  margin-right: 7%;
  align-items:center;

  ${({ gap }) => {
      switch (gap) {
        case 'yes':
          return css`
            gap:10%;
          `;
        default:
          return css`
            gap: none;
          `;
      }
    }}
`
export const SyledDescriptionDiv = styled.div`
margin: 14% 0px 0px 5%;
`
export const StyledButtonLogin = styled.button<IStyledParagraphProps>`
  background:none;

  border-radius: 12px;

  font-weight: 700;
  font-size: 14px;

  width: 103px;
  height: 36px;

  text-decoration: underline;
  
  ${({ color }) => {
    switch (color) {
      case 'blue':
        return css`
          color: #1DC1EB;
        `;
      default:
        return css`
          color: #F6F5F4;
        `;
    }
  }}
`;
export const StyledButtonRegister = styled.button<IStyledParagraphProps>`
  height: 36px;

  border-radius: 12px;

  font-weight: 700;
  font-size: 14px;
  color:#ffff;

  ${({ size }) => {
    switch (size) {
      case 'one':
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
      case 'green':
        return css`
          background-color: #82D74D;
        `;
      default:
        return css`
          background-color:#E9425A;
        `;
    }
  }}


`;

export const StyledTitleH1 = styled.h1`
margin-left:40%;
`