import styled from "styled-components";

export const HeaderHomePageStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  background-color: #2c2356;

  div {
    color: #f6f5f4;
  }
  p {
    color: #f6f5f4;
    padding: 0 1.5rem 0 0;
    cursor: pointer;
  }

  nav {
    display: flex;
    flex-direction: column;
    select {
      color: #757575;
      border-radius: 20px 20px 0 0;
      padding: 5px 10px;
      cursor: pointer;
    }

    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
    button {
      color: #757575;
      border-radius: 0 0 20px 20px;
      padding: 10px 10px;
    }

  }
`;
