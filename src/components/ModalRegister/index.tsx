import React from "react";
import { motion } from "framer-motion";
import { StyledDivModal,StyledModalOverlay,StyledModalBox,StyledModalClose,StyledModalTittle,StyledModalContent } from "./style";
import IndexRegister from "../Header/FormRegister";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
}

export const ModalRegister: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
        <StyledDivModal>
          <StyledModalOverlay
            ref={outsideRef}
            onClick={handleCloseOnOverlay}
          />
          <StyledModalBox>
            <StyledModalTittle>{title}</StyledModalTittle>
            <StyledModalClose
              onClick={onClose}
            >X
            </StyledModalClose>
            <img src="src/assets/spaceImage.png" alt=""/>
            <StyledModalContent>
              { children }
              <IndexRegister/>
            </StyledModalContent>
          </StyledModalBox>
        </StyledDivModal>
        </motion.div>
    </div>
    
      ) : null;
    };