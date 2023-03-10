//TODO: Add TextField
import React from "react";
import { ParagraphErrorStyle, StyledTextField, StyleInputPassword } from "./style";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';

import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface ITextField{
  label: string;
  auto?: string;
  type?: "text" | "email" | "password" | "number" | "name" ;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
}

interface IPassword{
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  auto?: string;
  error?: FieldError;
}


const InputDefault = ({label, error, type, auto, register}:ITextField) => (
  <>
  <StyledTextField type={type} autoComplete={auto} id="standard-basic" label={label}  variant="filled" {...register} />
  <ParagraphErrorStyle>
   { error ? error.message  : null }   
  </ParagraphErrorStyle> 
  </>
)
export default InputDefault;

export const InputPassword = ({auto, error, register , placeholder}:IPassword) =>{
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  };

  return (
  <>
  <StyleInputPassword autoComplete={auto} placeholder={placeholder}  id="standard-adornment-password" type={showPassword ? 'text' : 'password'} {...register} 
    endAdornment={
      <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    } />
    {
    error 
      ? <ParagraphErrorStyle>{error.message}</ParagraphErrorStyle>
      : null
    }
  </>
  )
}

