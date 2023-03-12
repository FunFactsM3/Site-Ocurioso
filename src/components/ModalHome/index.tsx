import React, { useContext } from "react";
import { string } from "yup";
import { ModalContext } from "../../providers/ModalContext";
import { UserContext } from "../../providers/UserContext";
import { IMGCardHomePageStyled } from "../MainHome/Card/style";
import { IMGModalHomePageStyled, StyledModalHome } from "./style";

export const ModalHome = () => {
  const { openModalDash, setModalDash, Post } = useContext(ModalContext);
  const { addPostToFavorit } = useContext(UserContext);

  if (openModalDash) {
    return (
      <StyledModalHome>
        <IMGModalHomePageStyled src={Post.src.replace("Img:", "")} alt="" />
        <button onClick={() => setModalDash(false)}>X</button>
        <>
          <h3>{Post.title}</h3>
          <p>{Post.description}</p>
          <p>{Post.content}</p>
          <div>
            <span>{Post.category}</span>
            <img
              src="src/assets/coracao.png"
              alt="coracao"
              onClick={() => addPostToFavorit(Post)}
            />
          </div>
        </>
      </StyledModalHome>
    );
  }

  return null;
};
