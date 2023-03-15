import React, { useContext } from "react";
import { DashContext } from "../../../providers/DashContext";
import { ModalContext } from "../../../providers/ModalContext";
import { IPosts } from "../../../providers/types/Interface";
import { CardHomePageStyled, IMGCardHomePageStyled } from "../../MainHome/Card/style";

interface IPost2 {
  Post: IPosts;
}

export const Card = ({ Post }: IPost2) => {
  const { setModalDash, setPost } = useContext(ModalContext);

    const { remPostToFavorites } = useContext(DashContext);

  return (
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
              src="https://i.imgur.com/0XFmm1w.png"
              alt="coracao"
              onClick={() => remPostToFavorites(Post)}
            />
          </div>
        </section>
      </CardHomePageStyled>
  )
  
};



