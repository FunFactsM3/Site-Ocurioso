export interface IChildren {
  children: React.ReactNode;
}

export interface ILoginFormValues{
  email: string;
  password: string;
}

export interface IRegisterFormValues{
  age: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IUserContext{
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
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

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
}
