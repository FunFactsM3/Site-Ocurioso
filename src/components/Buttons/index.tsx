import React, { useContext } from "react";
import { AiFillAudio, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillRecordFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { DashContext } from "../../providers/DashContext";
import { IButton, IPosts } from "../../providers/types/Interface";
import { ButtonLoginStyled, ButtonOpenStyled, ButtonCloseStyled, ButtonRegisterStyled, ButtonModalCloseStyled, ButtonRecord, ButtonSearch, ButtonRedHeart, ButtonBlackHeart } from "./style";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import usePersistedState from "../../utils/usePersistedState";

type Post = {
  Post:IPosts
}

export const IconHeart = ({Post}:Post) => {
  const [ icon, setIcon] = usePersistedState(`${Post.id}`,false);

  const { PostsFavorits, addPostToFavorit, remPostToFavorites } = useContext(DashContext)

  const changeIcon = () => {
    setIcon(!icon) 

    const index = PostsFavorits.findIndex((val) => val.id === Post.id);

    if(!icon && index < 0){
      addPostToFavorit(Post)
    } else {
     setTimeout(()=>{remPostToFavorites(Post)},230)

    }
  }

  return (
    icon 
    ? <ButtonRedHeart><AiFillHeart  onClick={()=>{changeIcon()}} /></ButtonRedHeart>
    : <ButtonBlackHeart><AiOutlineHeart  onClick={changeIcon} /></ButtonBlackHeart>
  )

} 

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

