import React from "react";

import { motion } from "framer-motion";

import {  WrapperStyle, ModalAsideStyle, ImageStyle, FormStyle } from "./style";

import FormRegister from "../Forms/FormRegister";

const ModalRegister = () => (
     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}> 
      <WrapperStyle>
        <ModalAsideStyle>
          <ImageStyle>
            <img src="src/assets/spaceImage.png" alt="" />
          </ImageStyle>
          <FormStyle>
            <FormRegister title="Cadastro" />
          </FormStyle>
        </ModalAsideStyle>
      </WrapperStyle>
    </motion.div>
);

export default ModalRegister;