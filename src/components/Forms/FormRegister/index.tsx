import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';

import { UserContext } from "../../../providers/UserContext";
import { Header, IRegisterFormValues } from "../../../providers/types/Interface";

import InputDefault, { InputPassword } from "../Input";

import { FormRegisterStyle } from "./style";

import { ButtonRegister } from "../../Buttons";

import { schemaRegister } from "../../../validators/Validator";


const FormRegister = ({title}:Header) => {
  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>({resolver: yupResolver(schemaRegister)});
  const { userRegister } = useContext(UserContext)

  return (
    <FormRegisterStyle onSubmit={handleSubmit(userRegister)}>
      <h1>{title}</h1>
      <InputDefault auto="name" label='Nome' type='name' register={register("name")} error={errors.name} />
      <InputDefault auto="email" label='Email' type='email' register={register("email")} error={errors.email} />
      <InputDefault label='Idade'  type='number' register={register("age")} error={errors.age} />
      <InputPassword auto="new-password" placeholder="Senha" register={register("password")} error={errors.password} />
      <InputPassword auto="password" placeholder="Confirme sua senha"  register={register("confirmPassword")} error={errors.confirmPassword} />
      <ButtonRegister text="Cadastre-se" />
    </FormRegisterStyle>
  );
};

export default FormRegister;
