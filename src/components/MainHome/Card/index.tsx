import React, { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { IPosts } from "../../../providers/types/Interface";
import axios from "../../../service/axios";
import { CardHomePageStyled, IMGCardHomePageStyled } from "./style";
type Post = {
  item: IPosts
}
export const Card = ({item}:Post) => {
  const { setModalDash } = useContext(ModalContext);

  
  return (
      <CardHomePageStyled>
        <IMGCardHomePageStyled
          src="src/assets/IMGDesmatamento.png"
          alt=""
          onClick={() => setModalDash(true)}
        />
        <div>
          <h3>{item.title}</h3>
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
  )
  
};
