import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ModalContext } from "../../providers/ModalContext";
import { IMGModalHomePageStyled, StyledModalHome, WrapperStyles } from "./style";

export const ModalHome = () => {
  const { openModalDash, setModalDash, Post } = useContext(ModalContext);

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
          </div>
        </>
      </StyledModalHome>
      </WrapperStyles>
      </motion.div>

    );
  }

  return null;
};
