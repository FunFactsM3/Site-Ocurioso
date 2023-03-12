import React, { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { IPosts } from "../../../providers/types/type";
import { UserContext } from "../../../providers/UserContext";
import { CardHomePageStyled, IMGCardHomePageStyled } from "./style";

interface IPost2 {
  Post: IPosts;
}

export const Card = ({ Post }: IPost2) => {
  const { setModalDash, setPost } = useContext(ModalContext);
  const { addPostToFavorit } = useContext(UserContext);

  function savepost() {
    localStorage.setItem("@POST", JSON.stringify(Post));
  }

  return (
    <>
      <CardHomePageStyled>
        <IMGCardHomePageStyled
          src={Post.src.replace("Img:", "")}
          alt={Post.title}
          onClick={() => {
            setModalDash(true), setPost(Post);
          }}
        />
        <section>
          <h3>{Post.title}</h3>
          <p>{Post.description}</p>
          <div>
            <span>{Post.category}</span>
            <img
              src="src/assets/coracao.png"
              alt="coracao"
              onClick={() => addPostToFavorit(Post)}
            />
          </div>
        </section>
      </CardHomePageStyled>
    </>
  );
};
