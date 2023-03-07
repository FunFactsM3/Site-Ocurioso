import { motion } from "framer-motion";
import React from "react";
import { ModalLogin } from "../ModalLogin";
import { ModalRegister } from "../ModalRegister";
import {
  HeaderStyled,
  StyledButtonLogin,
  StyledButtonRegister,
  StyledButtonsSection,
  SyledDescriptionDiv,
  StyledButtonsSection2,
  StyledButtonLogin2,
  StyledButtonRegister2,
  
} from "../Header/style";

const Header = () => {
  const [isModalLoginOpen, setModalStateLogin] = React.useState(false);
  const toggleModalLogin = () => setModalStateLogin(!isModalLoginOpen);
  const [isModalRegisterOpen, setModalStateRegister] = React.useState(false);
  const toggleModalRegister = () => setModalStateRegister(!isModalRegisterOpen);

  return (
    <>
      <motion.div />
      <HeaderStyled>
        <img src="src/assets/title.png" alt="" />
        <StyledButtonsSection>
          <div className={"app"}>
            <StyledButtonLogin
              onClick={toggleModalLogin}
            >
              Login
            </StyledButtonLogin>
            <ModalLogin
              title={"Login"}
              isOpen={isModalLoginOpen}
              onClose={toggleModalLogin}
            >
              .
            </ModalLogin>
          </div>
          <div className={"app"}>
            <StyledButtonRegister 
              onClick={toggleModalRegister}
            >
              Register
            </StyledButtonRegister>
            <ModalRegister
              title={"Register"}
              isOpen={isModalRegisterOpen}
              onClose={toggleModalRegister}
            >
              .
            </ModalRegister>
          </div>
        </StyledButtonsSection>
      </HeaderStyled>
      <SyledDescriptionDiv>
        <img src="src/assets/dicas.png" alt="" />
        <StyledButtonsSection2>
          <div className={"app"}>
            <StyledButtonLogin2
              onClick={toggleModalLogin}
            >
              Login
            </StyledButtonLogin2>
            <ModalLogin
              title={"Login"}
              isOpen={isModalLoginOpen}
              onClose={toggleModalLogin}
            >
              .
            </ModalLogin>
          </div>
          <div className={"app"}>
            <StyledButtonRegister2
              onClick={toggleModalRegister}
            >
              Register
            </StyledButtonRegister2>
            <ModalRegister
              title={"Register"}
              isOpen={isModalRegisterOpen}
              onClose={toggleModalRegister}
            >
              .
            </ModalRegister>
          </div>
        </StyledButtonsSection2>
      </SyledDescriptionDiv>
    </>
  );
};

export default Header;
