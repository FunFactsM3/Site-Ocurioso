import React, { useContext } from "react";

import { ModalContext } from "../../../providers/ModalContext";
import { IPosts } from "../../../providers/types/Interface";

import { IconHeart } from "../../Buttons";

import { CardHomePageStyled, IMGCardHomePageStyled, SpanStyled } from "./style";

interface IPost2 {
  Post: IPosts;
}

export const Card = ({ Post }: IPost2) => {
  const { setModalDash, setPost } = useContext(ModalContext);

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
            <SpanStyled>{Post.category}</SpanStyled>
            <IconHeart Post={Post} />
          </div>
        </section>
      </CardHomePageStyled>
  )
  
};



