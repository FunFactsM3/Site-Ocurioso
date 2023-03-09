import React, { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";
import { ModalContext } from "./ModalContext";

import { IUserContext, IChildren, ILoginFormValues, IRegisterFormValues } from "./types/type";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }:IChildren) =>{
  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try{
      // const response = await Axios.post("/login",formData)
      // console.log(response)
      // localStorage.setItem("@Ocurioso:",response.data.token)
      console.log(formData)
      navigate("/dash")
    }catch(errors){
      console.log(errors)
      console.log(formData)
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    // const {changeRegistrationModeForLogin} = useContext(ModalContext);
    try{
      if( formData.age >= 18 ) {
        const user = { ...formData, type: "young"}
        // const response = await Axios.post("/register",user)
        toast.success('Cadastrado com sucesso!');
        // changeRegistrationModeForLogin()
        // console.log(response)
        console.log(user)
      }else{
        const user = { ...formData, type: "kids"}
        // const response = await Axios.post("/register",user)
        toast.success('Carrrinho está limpo');
        // changeRegistrationModeForLogin()
        // console.log(response)
        console.log(user)
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