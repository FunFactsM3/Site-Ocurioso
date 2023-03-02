import React from "react";
import { createContext } from "react";
import { IUserContext, IChildren } from "./types/type";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }:IChildren) =>{
  const user = "Bruno";

  return (
    <UserContext.Provider 
      value={{user}}>
      {children}
    </UserContext.Provider>
  );
}