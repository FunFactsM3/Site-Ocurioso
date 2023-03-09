import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";
import { IRegisterFormValues } from "../../../providers/types/type"
import InputDefault, { InputPassword } from "../Input";

import { FormLoginStyle } from "../FormLogin/style";
import { ButtonCloseModal, ButtonRegister } from "../../Buttons";
import { ModalContext } from "../../../providers/ModalContext";

type Header = {
  title: string;
}

const FormRegister = ({title}:Header) => {
  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>();
  const { userRegister } = useContext(UserContext)
  const { toggleModalRegister } = useContext(ModalContext)

  return (
    <FormLoginStyle onSubmit={handleSubmit(userRegister)}>
      <ButtonCloseModal text="X" toglle={toggleModalRegister}/>
      <h1>{title}</h1>
      <InputDefault label='Nome' type='name' register={register("name")} error={errors.name} />
      <InputDefault label='Email' type='email' register={register("email")} error={errors.email} />
      <InputDefault label='Idade' type='name' register={register("name")} error={errors.age} />
      <InputPassword placeholder="Senha" register={register("password")} error={errors.password} />
      <InputPassword placeholder="Confirme sua senha"  register={register("password")} error={errors.confirmPassword} />
      <ButtonRegister text="Cadastre-se" />
    </FormLoginStyle>
  );
};

export default FormRegister;
