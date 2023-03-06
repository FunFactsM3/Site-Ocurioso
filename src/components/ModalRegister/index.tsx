import React from "react";
import { motion } from "framer-motion";

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
        <div className={"modal-register"}>
          <div
            ref={outsideRef}
            className={"modal__overlay-register"}
            onClick={handleCloseOnOverlay}
          />
          <div className={"modal__box-register"}>
            <button className={"modal__close-register"} onClick={onClose}>
              X
            </button>
            <div className={"modal__title-register"}>{title}</div>
            <div className={"modal__content-register"}>{children}</div>
          </div>
        </div>
      </motion.div>
    </div>
  ) : null;
};
