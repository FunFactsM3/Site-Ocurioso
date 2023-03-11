import React, { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";

import { IChildren, IUserContext } from "./types/Context";
import { ILoginFormValues, IRegisterFormValues } from "./types/Interface";


export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }:IChildren) =>{
  //TODO: crie um estado para armazenar o token, age.
  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try{
      const response = await Axios.post("/login",formData)
      toast.success('Login realizado com sucesso!');
      const token = response.data.accessToken;
      localStorage.setItem("@OcuriosoToken:",token)
      navigate("/dash")
    }catch(errors){
      console.log(errors)
      toast.error('Reveja seu dados!');
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    try{
      if( formData.age >= 18 ) {
        const user = { ...formData, type: "young"}
        await Axios.post("/register",user)
        toast.success('Cadastrado com sucesso!');
      }else{
        const user = { ...formData, type: "kids"}
        await Axios.post("/register",user)
        toast.success('Cadastrado com sucesso!');
      }
    }catch(errors){
      console.log(errors)
      console.log(formData)
      toast.error('Tente novamente!');
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@OcuriosoToken:');
    localStorage.removeItem('@OcurisoTheme:');
    navigate('/');
  };

  
  return (
    <UserContext.Provider 
      value={{ userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}