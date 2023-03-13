import { Switch } from "@mui/material";
import React from "react";
import { AiFillAudio, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillRecordFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IButton } from "../../providers/types/Interface";
import { ButtonLoginStyled, ButtonOpenStyled, ButtonCloseStyled, ButtonRegisterStyled, ButtonModalCloseStyled, ButtonRecord, ButtonSearch } from "./style";

export const ButtonCloseModal = ({toglle, text}:IButton) => (
  <ButtonModalCloseStyled onClick={toglle} >{text}</ButtonModalCloseStyled>
)

export const ButtonOpenModalLogin = ({text,color,toglle}:IButton) => (
  <>
  {
    text?.match("entrar")
    ? ( <ButtonOpenStyled color={color} onClick={toglle}>{text} <AiOutlineArrowRight /></ButtonOpenStyled>
    )
    : ( <ButtonOpenStyled color={color} onClick={toglle}>{text}</ButtonOpenStyled>
    )
  }
</>
)

export const ButtonOpenModalRegister = ({text,color,toglle}:IButton) => {
  return (
    <>
      {
        text?.match("Cadastre-se")
        ? ( <ButtonCloseStyled color={color} onClick={toglle}>{text} <AiOutlineArrowRight /> </ButtonCloseStyled> )
        : ( <ButtonCloseStyled color={color} onClick={toglle}>{text}</ButtonCloseStyled> )
      }
  </>
)
}

export const ButtonLogin = ({text,color,toglle}:IButton) => (
  <ButtonLoginStyled color={color} onClick={toglle}>{text}</ButtonLoginStyled>
)

export const ButtonRegister = ({text,toglle}:IButton) => (
  <ButtonRegisterStyled onClick={toglle}>{text}</ButtonRegisterStyled>
)

export const ButtonToRecord = ({toglle}:IButton) => (
  <ButtonRecord onClick={toglle}><AiFillAudio /></ButtonRecord>
)

export const ButtonToReco = ({toglle}:IButton) => (
  <ButtonRecord onClick={toglle}><BsFillRecordFill /></ButtonRecord>
)

export const ButtonToSearch = ({toglle}:IButton) => (
  <ButtonSearch onClick={toglle}><FiSearch /></ButtonSearch>
)

