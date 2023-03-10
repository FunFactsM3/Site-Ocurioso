import React, { useContext } from "react";
import Switch from "react-switch"

import { ModalContext } from "../../providers/ModalContext";

import { ButtonOpenModalLogin, ButtonOpenModalRegister } from "../Buttons";

import { HeaderStyled } from "./style";
import { ThemeContext } from "styled-components";
import { DarkContext } from "../../providers/DarkThemeContext";

const Header = () => {
  const { toggleModalLogin, toggleModalRegister } = useContext(ModalContext);
  const { toggleTheme } = useContext(DarkContext);
  const { title } = useContext(ThemeContext)

  return (
    <HeaderStyled> 
      <img src="src/assets/title.png" alt="Logo" />
      <Switch 
        className="change"      
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor="#000000"
        offColor="#ffffff"
      />
      <ButtonOpenModalLogin text="Entrar"  toglle={toggleModalLogin}/>
      <ButtonOpenModalRegister text="Cadastrar" toglle={toggleModalRegister}/>
    </HeaderStyled>
  );
};

export default Header;


