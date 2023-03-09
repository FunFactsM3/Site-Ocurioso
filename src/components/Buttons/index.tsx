import React from "react";

import { ButtonLoginStyled, ButtonOpenStyled, ButtonCloseStyled, ButtonRegisterStyled, ButtonModalCloseStyled } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";

interface IButton{
  text: string ;
  color?: string;
  toglle?:() => void;
}

//TODO: passar para o types, esses botões são para abrir o modal
export const ButtonCloseModal = ({toglle, text}:IButton) => (
  <ButtonModalCloseStyled onClick={toglle} >{text}</ButtonModalCloseStyled>
)

export const ButtonOpenModalLogin = ({text,color,toglle}:IButton) => (
  <>
  {
    text.match("entrar")
    ? ( <ButtonOpenStyled color={color} onClick={toglle}>{text} <AiOutlineArrowRight /></ButtonOpenStyled>
    )
    : ( <ButtonOpenStyled color={color} onClick={toglle}>{text}</ButtonOpenStyled>
    )
  }
</>
)

export const ButtonOpenModalRegister = ({text,color,toglle}:IButton) => (
    <>
      {
        text.match("Cadastre-se")
        ? ( <ButtonCloseStyled color={color} onClick={toglle}>{text} <AiOutlineArrowRight /> </ButtonCloseStyled> )
        : ( <ButtonCloseStyled color={color} onClick={toglle}>{text}</ButtonCloseStyled> )
      }
  </>
)

export const ButtonLogin = ({text,color,toglle}:IButton) => (
  <ButtonLoginStyled color={color} onClick={toglle}>{text}</ButtonLoginStyled>
)

export const ButtonRegister = ({text,toglle}:IButton) => (
  <ButtonRegisterStyled onClick={toglle}>{text}</ButtonRegisterStyled>
)


