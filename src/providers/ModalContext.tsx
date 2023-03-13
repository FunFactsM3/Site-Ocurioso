import React, { useRef, useState } from "react";
import { createContext } from "react";
import { IChildren, IModalContext } from "./types/Context";
import { IPosts } from "./types/Interface";


export const ModalContext = createContext({} as IModalContext);

export const ModalProviders = ({ children }: IChildren) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalLoginOpen, setModalStateLogin] = useState(false);
  const [isModalRegisterOpen, setModalStateRegister] = useState(false);
  const [openModalDash, setModalDash] = useState(false);

  const outsideRef = useRef(null);
  const toggleModalLogin = () => setModalStateLogin(!isModalLoginOpen);
  const toggleModalRegister = () => setModalStateRegister(!isModalRegisterOpen);

  const [Post, setPost] = useState<IPosts>({
    category: "",
    content: "",
    description: "",
    id: 1,
    minimunAge: "kids",
    src: "https://i.imgur.com/2Kxc0vW.jpg",
    title: "Ops, Ocorreu um erro, Feche o card e abra Novamente",
  });

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      toggleModalRegister();
    }
  };

  return (
    <ModalContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        handleCloseOnOverlay,
        toggleModalRegister,
        toggleModalLogin,
        isModalRegisterOpen,
        isModalLoginOpen,
        openModalDash,
        setModalDash,
        setModalStateRegister,
        setModalStateLogin,
        setPost,
        Post,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
