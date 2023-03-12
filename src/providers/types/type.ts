export interface IChildren {
  children: React.ReactNode;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IRegisterFormValues {
  age: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  type?: "young" | "kids";
}

export interface IUserContext {
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogout: () => void;
  User: number;
  setPostsList: React.Dispatch<React.SetStateAction<IPosts[]>>;
  PostsList: IPosts[];
  addPostToFavorit: (Post: IPosts) => void;
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
  Post: IPosts;
  setPost: React.Dispatch<React.SetStateAction<IPosts>>;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
}

export interface IPosts {
  id: number;
  src: string;
  title: string;
  description: string;
  content: string;
  category: string;
  minimunAge: string;
}
