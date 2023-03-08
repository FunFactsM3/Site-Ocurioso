import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ModalLogin } from "../ModalLogin";
import { ModalRegister } from "../ModalRegister";
import {
  HeaderStyled,
  StyledButtonLogin,
  StyledButtonRegister,
  StyledButtonsSection,
  SyledDescriptionDiv,
} from "../Header/style";
import { ModalContext } from "../../providers/ModalContext";

const Header = () => {
  const { toggleModalLogin, toggleModalRegister, isModalLoginOpen, isModalRegisterOpen} = useContext(ModalContext);

  return (
    <>
      <HeaderStyled> 
        <img src="src/assets/title.png" alt="Logo" />
        <StyledButtonsSection>
          <div className={"app"}>
            <StyledButtonLogin onClick={toggleModalLogin}> Login </StyledButtonLogin>
            <ModalLogin title={"Login"} isOpen={isModalLoginOpen} onClose={toggleModalLogin}> . </ModalLogin>
          </div>
          <div className={"app"}>
            <StyledButtonRegister margin="yes" onClick={toggleModalRegister}> Register </StyledButtonRegister>
            <ModalRegister title={"Register"} isOpen={isModalRegisterOpen} onClose={toggleModalRegister}> . </ModalRegister>
          </div>
        </StyledButtonsSection>
      </HeaderStyled>

      <SyledDescriptionDiv>
        <img src="src/assets/dicas.png" alt="dicas" />
        <StyledButtonsSection gap="yes">
          <div className={"app"}>
            <StyledButtonLogin color="blue" onClick={toggleModalLogin}> Login </StyledButtonLogin>
          </div>
          <div className={"app"}>
            <StyledButtonRegister background="green" size='one' onClick={toggleModalRegister}> Register </StyledButtonRegister>
          </div>
        </StyledButtonsSection>
      </SyledDescriptionDiv>

    </>
  );
};

export default Header;
