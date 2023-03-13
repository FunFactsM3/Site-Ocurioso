import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";

import {
  IUserContext,
  IChildren,
  ILoginFormValues,
  IRegisterFormValues,
} from "./types/type";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }: IChildren) => {
  const [Logado, setLogado] = useState(false);

  const [User, setUser] = useState<number>(1);

  //TODO: crie um estado para armazenar o token, age.
  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await Axios.post("/login", formData);
      const { accessToken } = response.data;
      localStorage.setItem("@Ocurioso:", accessToken);

      setUser(response.data.user.type);
      localStorage.setItem("@USER", response.data.user.type);
      setLogado(true);

      navigate("/dash");
    } catch (errors) {
      console.log(errors);
    }
  };

  const userRegister = async (formData: IRegisterFormValues) => {
    // const {changeLoginModeForRegistration} = useContext(ModalContext);

    try {
      if (formData.age >= 18) {
        const user = { ...formData, type: "young" };
        await Axios.post("/register", user);
        toast.success("Cadastrado com sucesso!");
        // changeLoginModeForRegistration()
      } else {
        const user = { ...formData, type: "kids" };
        await Axios.post("/register", user);
        toast.success("Cadastrado com sucesso!");

        // changeLoginModeForRegistration()
      }
    } catch (errors) {
      console.log(errors);
      console.log(formData);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@Ocurioso:");
    localStorage.removeItem("@USER");
    setLogado(false);

    localStorage.removeItem("@Favorits");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
        User,
        setLogado,
        Logado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
