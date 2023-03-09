import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }
  /* input::before{
    border: none !important;
  } */

  button{
    cursor: pointer;
  }

  :root {
    --primary-cyan: #1EC2EB;
    --primary-yellow: #FACC36;
    --primary-red: #E9425A;
    --primary-green: #82D74D;
    --primary-grey-light: #F6F5F4;
    --primary-grey-medium: #E0E0E0;
    --primary-grey-icon: #BABABA;
    --primary-grey-dark: #757575;

    --background-color: #2C2356;
    --white-color: #FFFFFF;
    --black-color: #000000;
    --background-color-modal: rgba(0, 0, 0, 0.5);

    --secondary-yellow: #C4A24C;
    --secondary-button-hover-green: #639B6D;
    --secondary-button-hover-red: #A95151;
  }

`;

//TODO: Add type declaration