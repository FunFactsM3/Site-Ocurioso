//TODO: Add TextField
import React from "react";
import { StyledTextField, StyleInputPassword } from "./style";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';

import InputAdornment from '@mui/material/InputAdornment';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface ITextField{
  label: string;
  type: "text" | "email" | "password" | "number" | "name";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

interface IPassword{
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  error?: FieldError;
}


const InputDefault = ({label, error, type, register}:ITextField) => (
  <>
  <StyledTextField type={type} id="standard-basic" label={label}  variant="filled" {...register} />
  {
    error 
      ? <p>{error.message}</p>
      : null
  }
  </>
)

export default InputDefault;

export const InputPassword = ({ error, register , placeholder}:IPassword) =>{
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
  <>
  <StyleInputPassword {...register} placeholder={placeholder}  id="standard-adornment-password" type={showPassword ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    } />
    {
    error 
      ? <p>{error.message}</p>
      : null
    }
  </>
  )
}

