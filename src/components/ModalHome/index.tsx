import React, { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { IMGCardHomePageStyled } from "../MainHome/Card/style";
import { IMGModalHomePageStyled, StyledModalHome } from "./style";

export const ModalHome = () => {
  const { openModalDash, setModalDash } = useContext(ModalContext);

  if (openModalDash) {
    return (
      <StyledModalHome>
        <IMGModalHomePageStyled src="src/assets/IMGDesmatamento.png" alt="" />
        <button onClick={() => setModalDash(false)}>X</button>
        <>
          <h3>Titulo</h3>
          <p>
            Descrição da categoria de forma completa, aumentei o texto para
            simular comportamentos na página. Descrição da categoria de forma
            completa, aumentei o texto para simular comportamentos na página.
          </p>
          <p>
            Descrição da categoria de forma completa, aumentei o texto para
            simular comportamentos na página.Descrição da categoria de forma
            completa, aumentei o texto para simular comportamentos na página.
            Descrição da categoria de forma completa, aumentei o texto para
            simular comportamentos na página. Descrição da categoria de forma
            completa, aumentei o texto para simular comportamentos na página.
            Descrição da categoria de forma completa, aumentei o texto para
            simular comportamentos na página.
          </p>
          <div>
            <span>Categoria</span>
            <img src="src/assets/coracao.png" alt="coracao" />
          </div>
        </>
      </StyledModalHome>
    );
  }

  return null;
};
