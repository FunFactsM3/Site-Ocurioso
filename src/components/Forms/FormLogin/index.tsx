import React from "react";
import { SearchFormStyledLogin } from "./style";
import {
  StyledDivEmail,
  StyledDivPassword,
  StyledButtonLogin,
  StyledSpanDescription,
  StyledButtonRegister,
  TextLink,
} from "./style";

const Index = () => {
  
  return (
    <SearchFormStyledLogin>
      <StyledDivEmail>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"

        />
      </StyledDivEmail>
      <StyledDivPassword>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
        />
      </StyledDivPassword>
      <StyledButtonLogin>Entrar</StyledButtonLogin>
      <StyledSpanDescription>Caso não tenha uma conta</StyledSpanDescription>
      <TextLink to="/">
        <StyledButtonRegister>Cadastre-se</StyledButtonRegister>
      </TextLink>
    </SearchFormStyledLogin>
  );
};

export default Index;
