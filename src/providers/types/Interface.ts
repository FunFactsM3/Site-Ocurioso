import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ILoginFormValues{
  email: string;
  password: string;
}

export interface IRegisterFormValues{
  name: string;
  email: string;
  age: number;
  password: string;
  confirmPassword?: string;
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

export type Header = {
  title: string;
}

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: string;
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

export interface IPosts{
  type: string;
  id: number;
  src:string;
  title:string;
  description:string;
  content:string;
  category:string;
  minimunAge?:string;

}