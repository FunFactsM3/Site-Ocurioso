export interface IChildren{
  children: React.ReactNode;
}

export interface ILoginFormValues{
  email: string;
  password: string;
}

export interface IRegisterFormValues{
  email: string;
  name: string;
  age: number;
  password: string;
  confirmPassword?: string;

}

export interface IUserContext{
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
}


export interface IModalContext{
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalRegisterOpen: boolean;
  isModalLoginOpen: boolean;
  handleCloseOnOverlay: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  toggleModalRegister: () => void;
  toggleModalLogin: () => void;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
}

