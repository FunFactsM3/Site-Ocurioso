import React, { useRef, useState } from "react";
import { createContext } from "react";

import { IChildren, IModalContext } from "./types/type";

export const ModalContext = createContext({} as IModalContext);

export const ModalProviders = ({ children }:IChildren) =>{
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalLoginOpen, setModalStateLogin] = useState(false);
  const [isModalRegisterOpen, setModalStateRegister] = useState(false);

  const toggleModalLogin = () => setModalStateLogin(!isModalLoginOpen);
  const toggleModalRegister = () => setModalStateRegister(!isModalRegisterOpen);

  const outsideRef = useRef(null);

  const changeRegistrationModeForLogin = () => { setModalStateRegister(!isModalRegisterOpen); setModalStateLogin(!isModalLoginOpen);} //TODO: Inverta á logica.

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      toggleModalRegister();
    }
  };
   
  return (
    <ModalContext.Provider value={{menuOpen, setMenuOpen, handleCloseOnOverlay,toggleModalRegister, toggleModalLogin, isModalRegisterOpen, isModalLoginOpen, changeRegistrationModeForLogin}}>
      {children}
    </ModalContext.Provider> 
  );
}
  