import React from "react";
import {
  SearchFormStyledRegister,
  StyledInputName,
  StyledInputEmail,
  StyledInputPass,
  StyledInputConfirmPass,
  StyledButtonRegister,
} from "./style";

const RegistrationForm = () => {
 

  return (
    <SearchFormStyledRegister>
      <label htmlFor="name"></label>
      <StyledInputName
        type="text"
        id="name"
        name="name"
        required
        placeholder="Nome"
      />

      <label htmlFor="email"></label>
      <StyledInputEmail
        type="email"
        id="email"
        name="email"
        required
        placeholder="Email"
      />

      <label htmlFor="password"></label>
      <StyledInputPass
        type="password"
        id="password"
        name="password"
        required
        placeholder="Senha"
      />

      <label htmlFor="confirmPassword"></label>
      <StyledInputConfirmPass
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        placeholder="Confirme a Senha"
      />

      <StyledButtonRegister type="submit">Cadastrar</StyledButtonRegister>
    </SearchFormStyledRegister>
  );
};

export default RegistrationForm;
