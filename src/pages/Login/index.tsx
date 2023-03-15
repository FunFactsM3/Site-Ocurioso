import React, { useContext } from "react";
import { GlobalStyles } from "../../styles/global";
import { LoginPageStyled, DivStyle, MainStyle,  SpaceButtonsStyle, TextParagraphStyle, TextTitleStyle } from "./style";
import { ModalContext } from "../../providers/ModalContext";
import Header  from "../../components/Header";
import ModalLogin from "../../components/ModalLogin";
import ModalRegister from "../../components/ModalRegister";
import {  ButtonOpenModalLogin, ButtonOpenModalRegister } from "../../components/Buttons";


const LoginPage = () => {
  const { toggleModalLogin, toggleModalRegister, isModalLoginOpen, isModalRegisterOpen} = useContext(ModalContext);
  
  return (
    <>
      <GlobalStyles />
      <LoginPageStyled>
        <Header />
        <DivStyle>
          <MainStyle>
            <div>
              <TextParagraphStyle>VOCÊ SABIA?</TextParagraphStyle>
              <TextTitleStyle type="h1">Aqui tem as curiosidades mais legais do mundo </TextTitleStyle>
              <TextTitleStyle type="h2">Você dscobre tudo sobre ciência e o mundo de um jeito divertido.  É só pesquisar a sua curiosidade e pronto! Ah, ainda dá pra salvar o que você pesquisou pra ver depois </TextTitleStyle>
              <SpaceButtonsStyle>
                <ButtonOpenModalLogin text="Entre aqui" color="blue" toglle={toggleModalLogin}/>
                <ButtonOpenModalRegister text={`Cadastre-se`} color="green" toglle={toggleModalRegister}/>
              </SpaceButtonsStyle>
            </div>
          </MainStyle>
        </DivStyle>
        { isModalLoginOpen ? <ModalLogin /> : null }
        { isModalRegisterOpen ? <ModalRegister /> : null }
        <h3>2023 | Ocurioso</h3>
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;