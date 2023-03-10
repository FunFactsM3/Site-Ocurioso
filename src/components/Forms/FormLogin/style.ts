import styled from "styled-components";

export const FormLoginStyle = styled.form`
    width: 90%; height: auto;
    
    gap: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    position: relative;

    background-color: ${({theme}) => theme.color.primaryGreyLight};
 
    h1{
      font-family: 'Open Sans', sans-serif;
      color: ${({theme}) => theme.color.backgroundColor};
    }
    @media screen and (min-width: 1000px) {
      width: 75%; height: auto;
    }
`;
export const StyledSpanDescription = styled.span`
  width: 140px;
  height: 12px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: ${({theme}) => theme.color.primaryGreyDark};
  flex: none;
  text-align: center;
`;
