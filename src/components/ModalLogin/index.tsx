import React, { useContext } from "react";
import { motion } from "framer-motion";
import FormLogin from "../Forms/FormLogin";
import { FormStyle, ImageStyle, ModalAsideStyle, WrapperStyle } from "./style";
import { ButtonCloseModal } from "../Buttons";
import { ModalContext } from "../../providers/ModalContext";

const ModalLogin = () => {
  const { toggleModalLogin } = useContext(ModalContext)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}> 
      <WrapperStyle>
        <ModalAsideStyle>
          <ButtonCloseModal text="X" toglle={toggleModalLogin}/>
          <ImageStyle>
            <img src="src/assets/spaceImage.png" alt="" />
          </ImageStyle>
          <FormStyle>
            <FormLogin title="Login"/>
          </FormStyle>
        </ModalAsideStyle>
      </WrapperStyle>
    </motion.div>
  )
};

export default ModalLogin;