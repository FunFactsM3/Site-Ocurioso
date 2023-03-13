import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Axios from "../service/axios";
import { IChildren, IDashContext } from "./types/Context";
import { IPosts } from "./types/Interface";

// import { IChildren, IPosts, IDashContext } from "./types/type";
import { UserContext } from "./UserContext";

export const DashContext = createContext({} as IDashContext);

export const DashProviders = ({ children }: IChildren) => {
  const localPostsFavorits = localStorage.getItem("@Favorits");

  const [PostsList, setPostsList] = useState<IPosts[]>([]);
  const [PostsFavorits, setPostsFavorits] = useState<IPosts[]>(
    localPostsFavorits ? JSON.parse(localPostsFavorits) : []
  );

  const [ValueSelect, setValueSelect] = useState({ type: "Deslogado" });
  const [PostsFilter, setPostsFilter] = useState<IPosts[]>([]);

  const { Logado } = useContext(UserContext);

  const navigate = useNavigate();

  //Renderização

  useEffect(() => {
    const type = localStorage.getItem("@USER");

    if (type === "young") {
      const LoadPostsdata = async () => {
        try {
          const response = await Axios.get("/posts");

          setPostsList(response.data);
          setPostsFilter(response.data);
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
          setPostsFilter(response.data);
        } catch (error) {
          toast.error(`${error}`);
        }
      };
      LoadPostsdata();
    }
  }, [Logado]);

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

  const type = localStorage.getItem("@USER");

  useEffect(() => {
    LoadPostsdata(`${ValueSelect.type}`);
  }, [ValueSelect]);

  const LoadPostsdata = (data: string) => {
    if (type === "young") {
      if (data === "") {
        setPostsFilter(PostsList);
      } else {
        const filteredList = PostsList.filter((Post) => Post.category === data);
        setPostsFilter(filteredList);
      }
    } else {
      if (data === "") {
        setPostsFilter(PostsList);
      } else {
        const filteredList = PostsList.filter((Post) => Post.category === data);
        setPostsFilter(filteredList);
      }
    }
  };

  const favoritPage = () => {
    navigate("/favorites");
  };

  return (
    <DashContext.Provider
      value={{
        setPostsList,
        PostsList,
        addPostToFavorit,
        ValueSelect,
        setValueSelect,
        LoadPostsdata,
        PostsFilter,
        PostsFavorits,
        favoritPage,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
