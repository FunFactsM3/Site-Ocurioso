export interface IChildren{
  children: React.ReactNode;
}

export interface IUserContext{
  user: string | null;
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

