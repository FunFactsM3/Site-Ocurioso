import React, { useState } from "react";
import { createContext } from "react";

import { IChildren, IModalContext } from "./types/type";

export const ModalContext = createContext({} as IModalContext);

export const ModalProviders = ({ children }:IChildren) =>{
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <ModalContext.Provider value={{menuOpen, setMenuOpen}}>
      {children}
    </ModalContext.Provider> 
  );
}
