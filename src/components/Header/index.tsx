import React, { useContext } from "react";

import { ModalContext } from "../../providers/ModalContext";

import { HeaderStyled } from "./style";
import { ButtonOpenModalLogin, ButtonOpenModalRegister } from "../Buttons";

const Header = () => {
  const { toggleModalLogin, toggleModalRegister } = useContext(ModalContext);

  return (
    <HeaderStyled> 
      <img src="src/assets/title.png" alt="Logo" />
      <ButtonOpenModalLogin text="Entrar"  toglle={toggleModalLogin}/>
      <ButtonOpenModalRegister text="Cadastrar" toglle={toggleModalRegister}/>
    </HeaderStyled>
  );
};

export default Header;


