import React from "react";
import Header from "../../components/Header";
import { LoginPageStyled } from "../LoginPage/style";
import { GlobalStyles } from "../../styles/global";

const LoginPage = () => {
  return (
    <>
      <GlobalStyles />
      <LoginPageStyled>
        <Header />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;