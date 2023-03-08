import React, { useContext } from "react";
import { motion } from "framer-motion";
import IndexRegister from "../Forms/FormRegister";
import { ModalContext } from "../../providers/ModalContext";
import { ModalProps } from "../../providers/types/type";
import { 
  StyledDivModal,StyledModalOverlay,
  StyledModalBox,StyledModalClose,
  StyledModalTittle,StyledModalContent 
} from "./style";



export const ModalRegister: React.FC<ModalProps> = ({title,children}) => {
  const {handleCloseOnOverlay, toggleModalRegister,  isModalRegisterOpen} = useContext(ModalContext);
  const outsideRef = React.useRef(null);

  return isModalRegisterOpen ? (
    <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
        <StyledDivModal>
          <StyledModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay}/>
          <StyledModalBox>
            <StyledModalTittle>{title}</StyledModalTittle>
            <StyledModalClose onClick={toggleModalRegister}> X </StyledModalClose>
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