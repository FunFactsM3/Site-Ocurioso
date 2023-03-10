import React, { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";
import { ModalContext } from "./ModalContext";

import { IUserContext, IChildren, ILoginFormValues, IRegisterFormValues } from "./types/type";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }:IChildren) =>{
  //TODO: crie um estado para armazenar o token, age.
  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try{
      const response = await Axios.post("/login",formData)
      const { token } = response.data
      localStorage.setItem("@Ocurioso:",token)
      navigate("/dash")
    }catch(errors){
      console.log(errors)
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    // const {changeLoginModeForRegistration} = useContext(ModalContext);
    try{
      if( formData.age >= 18 ) {
        const user = { ...formData, type: "young"}
        await Axios.post("/register",user)
        toast.success('Cadastrado com sucesso!');
        // changeLoginModeForRegistration()
      }else{
        const user = { ...formData, type: "kids"}
        await Axios.post("/register",user)
        toast.success('Cadastrado com sucesso!');
        // changeLoginModeForRegistration()
      }
    }catch(errors){
      console.log(errors)
      console.log(formData)
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@Ocurioso:');
    navigate('/');
  };


  return (
    <UserContext.Provider 
      value={{userLogin, userRegister}}>
      {children}
    </UserContext.Provider>
  );
}