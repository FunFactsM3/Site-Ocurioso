import React from 'react';
import { motion } from "framer-motion";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children:string;
}

export const ModalLogin: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  }

  return isOpen ? (
<div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
    <div className={'modal'}>
      <div
        ref={outsideRef}
        className={'modal__overlay'}
        onClick={handleCloseOnOverlay}
      />
      <div className={'modal__box'}>
        <button
          className={'modal__close'}
          onClick={onClose}
        >X
        </button>
        <div className={'modal__title'}>
          {title}
        </div>
        <div className={'modal__content'}>
          { children }
        </div>
      </div>
    </div>
    </motion.div>
</div>

  ) : null;
};
