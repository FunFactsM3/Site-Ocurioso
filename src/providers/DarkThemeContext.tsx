import React,{ createContext, useState } from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import usePersistedState from "../utils/usePersistedState";
import { IChildren, IDarkContext } from "./types/Context";

export const DarkContext = createContext({} as IDarkContext);

export const DarkProviders = ({ children }:IChildren) =>{
  const [theme, setTheme] = usePersistedState('@OcurisoTheme:',light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
   };

  return (
    <DarkContext.Provider 
      value={{theme, toggleTheme}}>
      {children}
    </DarkContext.Provider>
  );
}