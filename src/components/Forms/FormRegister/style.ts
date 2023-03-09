import styled from "styled-components";

export const FormRegisterStyle = styled.form`
    width: 90%; height: auto;

    gap: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    position: relative;
    z-index: 0;
 
    h1{
      font-family: 'Open Sans', sans-serif;
      color: #2C2356;
    }
    @media screen and (min-width: 1000px) {
      width: 90%; height: auto;
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
  color: #757575;
  flex: none;
  text-align: center;
`;


