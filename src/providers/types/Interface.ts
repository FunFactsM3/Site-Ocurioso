import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type Header = {
  title: string;
}

export interface IPosts{
  type?: string;
  id: number;
  src:string;
  title:string;
  description:string;
  content:string;
  category:string;
  minimunAge?:string;
}
export interface IButton{
  text?: string | null ;
  color?: string;
  toglle?:() => void;
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
  type?: "young" | "kids";
}
export interface ModalProps {
  title: string;
  isOpen: boolean;
  children: string;
  onClose: () => void;


}
export interface ITextField{
  label: string;
  auto?: string;
  type?: "text" | "email" | "password" | "number" | "name" ;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
}
export interface IPassword{
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  auto?: string;
  error?: FieldError;
}



