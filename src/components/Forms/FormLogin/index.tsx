import React, { useContext } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';

import { FormLoginStyle } from "./style";
import { StyledSpanDescription } from "./style";

import InputDefault from "../Input";
import { InputPassword } from "../Input";

import { ButtonCloseModal, ButtonLogin, ButtonRegister } from "../../Buttons";

import { UserContext } from "../../../providers/UserContext";
import { ModalContext } from "../../../providers/ModalContext";

import { schemaLogin } from "../../../validators/Validator";

//TODO:passe todas interfaces para o types, tire h1 e coloque um styleComponents.

export interface ILoginFormValues{
  email: string;
  password: string;
}

type Header = {
  title: string;
}

const FormLogin = ({title}:Header) => {
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>({resolver: yupResolver(schemaLogin)});
  const { userLogin } = useContext(UserContext)
  const { changeRegistrationModeForLogin } = useContext(ModalContext)

  
  return (
    <FormLoginStyle onSubmit={handleSubmit(userLogin)}>
      <h1>{title}</h1>
      <InputDefault label='Email' type='email' register={register("email")} error={errors.email} />
      <InputPassword placeholder="Sua senha"  register={register("password")} error={errors.password} />
      <ButtonLogin text="Entrar" />
      <StyledSpanDescription>Caso não tenha uma conta</StyledSpanDescription>
      <ButtonRegister toglle={changeRegistrationModeForLogin} text="Cadastre-se" />
    </FormLoginStyle>
  );
};

export default FormLogin;
