import React from "react";
import { motion } from "framer-motion";
import {
  StyledDivModal,
  StyledDivModalOverlay,
  StyledDivModalBox,
  StyledButtonClose,
  StyledDivModalTittle,
  StyledDivModalContent,
} from "./style";
import Index from "../Header/FormLogin";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
}

export const ModalLogin: React.FC<ModalProps> = ({
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
          <StyledDivModalOverlay
            ref={outsideRef}
            onClick={handleCloseOnOverlay}
          />
          <StyledDivModalBox>
            <StyledDivModalTittle>{title}</StyledDivModalTittle>
            <img src="src/assets/spaceImage.png" alt="" />
            <StyledButtonClose onClick={onClose}>X</StyledButtonClose>
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
