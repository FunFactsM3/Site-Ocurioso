import { DefaultThemes } from "styled-components";
import { ILoginFormValues, IPosts, IRegisterFormValues } from "./Interface";

export interface IDarkContext{
  theme: DefaultThemes,
  toggleTheme(): void;
}
export interface ISpeechContext{
  img: boolean,
  setImg: React.Dispatch<React.SetStateAction<boolean>>;
  toggleImg(): void;
}
export interface IUserContext{
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout(): void;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  User: number;
  Logado: boolean;
  result: IPosts[];
  // postList: IPosts[];
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  // setPostList: React.Dispatch<React.SetStateAction<IPosts[]>>;
  setResult : React.Dispatch<React.SetStateAction<IPosts[]>>;
  setLogado: React.Dispatch<React.SetStateAction<boolean>>;
 
}
export interface IModalContext {
  Post: IPosts;
  menuOpen: boolean;
  openModalDash: boolean;
  isModalLoginOpen: boolean;
  isModalRegisterOpen: boolean;
  toggleModalLogin: () => void;
  toggleModalRegister: () => void;
  handleCloseOnOverlay: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  setPost: React.Dispatch<React.SetStateAction<IPosts>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDash: React.Dispatch<React.SetStateAction<boolean>>;
  setModalStateLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setModalStateRegister: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IDashContext {
  setPostsList: React.Dispatch<React.SetStateAction<IPosts[]>>;
  PostsList: IPosts[];
  addPostToFavorit: (Post: IPosts) => void;
  ValueSelect: {
    type: string;
  };
  setValueSelect: React.Dispatch<
    React.SetStateAction<{
      type: string;
    }>
  >;
  LoadPostsdata: (data: string) => void;
  PostsFilter: IPosts[];
  favoritPage: () => void;
}
export interface IChildren {
  children: React.ReactNode;
}
