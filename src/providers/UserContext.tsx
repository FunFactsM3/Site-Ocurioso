import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";
import { ModalContext } from "./ModalContext";

import {
  IUserContext,
  IChildren,
  ILoginFormValues,
  IRegisterFormValues,
  IPosts,
} from "./types/type";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }: IChildren) => {
  const localPostsFavorits = localStorage.getItem("@Favorits");

  const [User, setUser] = useState<number>(1);
  const [PostsList, setPostsList] = useState<IPosts[]>([]);
  const [PostsFavorits, setPostsFavorits] = useState<IPosts[]>(
    localPostsFavorits ? JSON.parse(localPostsFavorits) : []
  );

  //TODO: crie um estado para armazenar o token, age.
  const navigate = useNavigate();

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      const response = await Axios.post("/login", formData);
      const { accessToken } = response.data;
      localStorage.setItem("@Ocurioso:", accessToken);

      setUser(response.data.user.type);
      localStorage.setItem("@USER", response.data.user.type);
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
    localStorage.removeItem("@POSTS");
    localStorage.removeItem("@Favorits");
    navigate("/");
  };

  //Renderização

  useEffect(() => {
    const type = localStorage.getItem("@USER");

    if (type === "young") {
      const LoadPostsdata = async () => {
        try {
          const response = await Axios.get("/posts");

          setPostsList(response.data);
          localStorage.setItem("@POSTS", JSON.stringify(response.data));
        } catch (error) {
          toast.error(`${error}`);
        }
      };
      LoadPostsdata();
    } else {
      const LoadPostsdata = async () => {
        try {
          const response = await Axios.get("/posts?minimunAge=kids");
          setPostsList(response.data);

          localStorage.setItem("@POSTS", JSON.stringify(response.data));
        } catch (error) {
          toast.error(`${error}`);
        }
      };
      LoadPostsdata();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@Favorits", JSON.stringify(PostsFavorits));
  }, [PostsFavorits]);

  const addPostToFavorit = (Post: IPosts) => {
    const index = PostsFavorits.findIndex((val) => val.id === Post.id);

    if (index < 0) {
      setPostsFavorits([...PostsFavorits, Post]);
      toast.success("Post adicionado à Lista de Favoritos com sucesso");
    } else {
      toast.warning(`Post já está na Lista de Favoritos`);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
        User,
        setPostsList,
        PostsList,
        addPostToFavorit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
