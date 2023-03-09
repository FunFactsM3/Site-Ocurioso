import React from "react";

import { motion } from "framer-motion";

import FormLogin from "../Forms/FormLogin";

import { FormStyle, ImageStyle, ModalAsideStyle, WrapperStyle } from "./style";

const ModalLogin = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}> 
      <WrapperStyle>
        <ModalAsideStyle>
          <ImageStyle>
            <img src="src/assets/spaceImage.png" alt="" />
          </ImageStyle>
          <FormStyle>
            <FormLogin title="Login"/>
          </FormStyle>
        </ModalAsideStyle>
      </WrapperStyle>
    </motion.div>
);

export default ModalLogin;