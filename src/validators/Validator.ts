import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().email().required("Email incorreto"),
  password: yup
  .string()
  .matches(/(\d)/, "Deve conter ao menos 1 numero")
  .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
  .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
  .matches(/(\W|_)/, "Deve conter ao menos 1 caractere especial")
  .matches(/.{8,}/, "Deve conter no minimo 8 caracteres"),
}).required("Preencha o campo")

export const schemaRegister = yup.object({
  name: yup.string().required("Nome incorreto"),
  email: yup.string().email().required("Email incorreto"),
  password: yup
  .string()
  .matches(/(\d)/, "Deve conter ao menos 1 numero")
  .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
  .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
  .matches(/(\W|_)/, "Deve conter ao menos 1 caractere especial")
  .matches(/.{8,}/, "Deve conter no minimo 8 caracteres"),
  confirmPassword: yup.string().oneOf([yup.ref('password')],"as senhas não são iguais")
  .required("A confirmação de senha é obrigatoria")

}).required("Preencha o campo")
