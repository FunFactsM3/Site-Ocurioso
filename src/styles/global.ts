import { createGloabalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

`;

//TODO: Add type declaration