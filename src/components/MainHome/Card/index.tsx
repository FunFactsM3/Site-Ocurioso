import React, { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { CardHomePageStyled, IMGCardHomePageStyled } from "./style";

export const Card = () => {
  const { setModalDash } = useContext(ModalContext);

  return (
    <>
      <CardHomePageStyled>
        <IMGCardHomePageStyled
          src="src/assets/IMGDesmatamento.png"
          alt=""
          onClick={() => setModalDash(true)}
        />
        <div>
          <h3>Titulo</h3>
          <p>
            Descrição da categoria de forma resumida, aumentei o texto para
            simular comportamentos na página
          </p>
          <div>
            <span>Categoria</span>
            <img src="src/assets/coracao.png" alt="coracao" />
          </div>
        </div>
      </CardHomePageStyled>
    </>
  );
};
