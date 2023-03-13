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
  searchValue: string;
  postList: IPosts[];
  result: IPosts[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setPostList: React.Dispatch<React.SetStateAction<IPosts[]>>;
  setResult : React.Dispatch<React.SetStateAction<IPosts[]>>;

}

export interface IModalContext {
  menuOpen: boolean;
  isModalLoginOpen: boolean;
  isModalRegisterOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModalLogin: () => void;
  toggleModalRegister: () => void;
  handleCloseOnOverlay: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  changeRegistrationModeForLogin: () => void;
  changeLoginModeForRegistration: () => void;
  openModalDash: boolean;
  setModalDash: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IChildren {
  children: React.ReactNode;
}
