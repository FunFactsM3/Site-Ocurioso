import React, { useState } from "react";
import { createContext } from "react";

import Axios from "../service/axios";

import { IUserContext, IChildren, ILoginFormValues, IRegisterFormValues } from "./types/type";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }:IChildren) =>{

  const userLogin = async (formData: ILoginFormValues) => {
    try{
      const response = await Axios.post("/login",formData)
      console.log(response)
      console.log(formData)
    }catch(errors){
      console.log(errors)
      console.log(formData)

    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try{
      if( formData.age >= 18 ) {
        const user = { ...formData, type: "young"}
        const response = await Axios.post("/register",user)
        console.log(response)
        console.log(user)
      }else{
        const user = { ...formData, type: "kids"}
        const response = await Axios.post("/register",user)
        console.log(response)
        console.log(user)
      }
    }catch(errors){
      console.log(errors)
      console.log(formData)

    }
  };



  return (
    <UserContext.Provider 
      value={{userLogin, userRegister}}>
      {children}
    </UserContext.Provider>
  );
}