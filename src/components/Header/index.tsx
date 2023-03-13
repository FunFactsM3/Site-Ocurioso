import React, { useContext } from "react";
import Switch from "react-switch"
import { ModalContext } from "../../providers/ModalContext";
import { ButtonOpenModalLogin, ButtonOpenModalRegister } from "../Buttons";
import { HeaderStyled, HeaderDiv } from "./style";
import { ThemeContext } from "styled-components";
import { DarkContext } from "../../providers/DarkThemeContext";
import Title from "../../assets/title.png";

const Header = () => {
  const { toggleModalLogin, toggleModalRegister } = useContext(ModalContext);
  const { toggleTheme } = useContext(DarkContext);
  const { title } = useContext(ThemeContext)

  return (
    <HeaderStyled> 
      <div>
        <img src={Title} alt="Logo" />
        <HeaderDiv>
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
        </HeaderDiv>
      </div>
    </HeaderStyled>
  );
};

export default Header;


