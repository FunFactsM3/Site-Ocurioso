import React from "react";
import { FooterHomePageStyled, FooterContainer, FooterDiv  } from "./style";

export const FooterHome = () => {
  return (
    <FooterHomePageStyled>
    <FooterContainer>
      <FooterDiv>
        <a href="https://www.linkedin.com/in/bruno-abreu-903185226/">Bruno</a>
        <img src="src/assets/separador.png" alt="" />
        <a href="https://www.linkedin.com/in/diegocarvalhodev/">Diego</a>
        <img src="src/assets/separador.png" alt="" />
        <a href="https://www.linkedin.com/in/gedson-candido-a82428180/">Gedson</a>
        <img src="src/assets/separador.png" alt="" />
        <a href="https://www.linkedin.com/in/livia-melo/" >Lívia</a>
      </FooterDiv>
    </FooterContainer>
      <div>
        <a href="">2023 | Ocurioso</a>
      </div>
  </FooterHomePageStyled>
  );
};
