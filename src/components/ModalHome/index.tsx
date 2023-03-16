import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DashContext } from "../../providers/DashContext";
import { ModalContext } from "../../providers/ModalContext";
import { IconHeart } from "../Buttons";

import { IMGModalHomePageStyled, StyledModalHome, WrapperStyles } from "./style";

export const ModalHome = () => {
  const { openModalDash, setModalDash, Post } = useContext(ModalContext);
  const { addPostToFavorit } = useContext(DashContext);

  if (openModalDash) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}> 
      <WrapperStyles>
      <StyledModalHome>
        <IMGModalHomePageStyled src={Post.src.replace("Img:", "")} alt="" />
        <button onClick={() => setModalDash(false)}>X</button>
        <>
          <h3>{Post.title}</h3>
          <p>{Post.description}</p>
          <p>{Post.content}</p>
          <div>
            <span>{Post.category}</span>
            {/* <IconHeart Post={Post} /> */}
          </div>
        </>
      </StyledModalHome>
      </WrapperStyles>
      </motion.div>

    );
  }

  return null;
};
