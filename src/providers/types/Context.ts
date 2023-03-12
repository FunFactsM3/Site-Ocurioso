import { DefaultThemes } from "styled-components";
import { ILoginFormValues, IRegisterFormValues } from "./Interface";

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
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
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
