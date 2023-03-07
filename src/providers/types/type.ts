export interface IChildren{
  children: React.ReactNode;
}

export interface IUserContext{
  user: string | null;
}

export interface IModalContext{
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

