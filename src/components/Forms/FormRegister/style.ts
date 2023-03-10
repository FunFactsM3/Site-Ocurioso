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

    background-color: ${({theme}) => theme.color.primaryGreyLight};
 
    h1{
      font-family: 'Open Sans', sans-serif;
      color: ${({theme}) => theme.color.backgroundColor};
    }
    @media screen and (min-width: 1000px) {
      width: 90%; height: auto;
    }

`;
