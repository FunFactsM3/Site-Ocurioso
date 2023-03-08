import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  StyledDivModal,
  StyledDivModalOverlay,
  StyledDivModalBox,
  StyledButtonClose,
  StyledDivModalTittle,
  StyledDivModalContent,
} from "./style";
import Index from "../Forms/FormLogin";
import { ModalContext } from "../../providers/ModalContext";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
}

export const ModalLogin: React.FC<ModalProps> = ({ title, children}) => {
  const {handleCloseOnOverlay, toggleModalLogin,  isModalLoginOpen} = useContext(ModalContext);
  const outsideRef = React.useRef(null);

  return isModalLoginOpen ? (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0. }}
      >
        <StyledDivModal>
          <StyledDivModalOverlay
            ref={outsideRef}
            onClick={handleCloseOnOverlay}
          />
          <StyledDivModalBox>
            <StyledDivModalTittle>{title}</StyledDivModalTittle>
            <img src="src/assets/spaceImage.png" alt="" />
            <StyledButtonClose onClick={toggleModalLogin}>X</StyledButtonClose>
            <StyledDivModalContent>
              {children}
              <Index />
            </StyledDivModalContent>
          </StyledDivModalBox>
        </StyledDivModal>
      </motion.div>
    </div>
  ) : null;
};
