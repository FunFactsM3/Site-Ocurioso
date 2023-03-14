import React from "react";
import { ParagraphErrorStyle, StyledTextField, StyleInputPassword } from "./style";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { IPassword, ITextField} from "../../../providers/types/Interface";

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
    <ParagraphErrorStyle>
    { error ? error.message  : null }   
    </ParagraphErrorStyle> 
  </>
  )
}

