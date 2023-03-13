import React from "react";
import { FooterHomePageStyled, FooterContainer, FooterDiv  } from "./style";

export const FooterHome = () => {
  return (
    <FooterHomePageStyled>
    <FooterContainer>
      <FooterDiv>
        <p>Bruno</p>
        <img src="src/assets/separador.png" alt="" />
        <p>Diego</p>
        <img src="src/assets/separador.png" alt="" />
        <p>Gedson</p>
        <img src="src/assets/separador.png" alt="" />
        <p>Lívia</p>
      </FooterDiv>
    </FooterContainer>
      <div>
        <p>2023 | Ocurioso</p>
      </div>
  </FooterHomePageStyled>
  );
};
