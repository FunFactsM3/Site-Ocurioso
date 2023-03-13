import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";
import { ModalContext } from "./ModalContext";

import { IChildren, IUserContext } from "./types/Context";
import { ILoginFormValues, IPosts, IRegisterFormValues } from "./types/Interface";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }:IChildren) =>{
  const [searchValue,  setSearchValue] = useState("");
  const [postList, setPostList] = useState<IPosts[]>([]);
  const [ result, setResult ] = useState<IPosts[]>([]);

  const { setModalStateRegister,setModalStateLogin } = useContext(ModalContext)

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@OcuriosoToken:");
    if (token) {
      navigate("/dash");
    }
  }, []);

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
        setModalStateRegister(false)
        setModalStateLogin(true)
      }else{
        const user = { ...formData, type: "kids"}
        await Axios.post("/register",user)
        toast.success('Cadastrado com sucesso!');
        setModalStateRegister(false)
        setModalStateLogin(true)
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
      value={{ userLogin, userRegister, userLogout, searchValue,  setSearchValue, postList, setPostList, result, setResult}}>
      {children}
    </UserContext.Provider>
  );
}
