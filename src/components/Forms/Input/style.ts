import { TextField } from '@mui/material';
import Input from '@mui/material/Input';

import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  width: 100%; 
  background-color: #fff;
  box-shadow: 0 22px 45.8px -11.45px #34292742;

  input {
    font-family: Arial, Helvetica, sans-serif;
    height: 20px;  width: 100%; 
    border-radius: 10px;
    border: none;
    background-color: #fff;
  }
  
  label {
    &.Mui-focused {
      color:  rgba(117, 117, 117, 1);
    }
  }

  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root::before{
    border: none!important;
  }
  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root::after{
    border: none!important;
  }
`;

export const StyleInputPassword = styled(Input)`
  width: 100%; height: 50px;
  padding-left: 10px;

  background-color: #fff;

  box-shadow: 0 22px 45.8px -11.45px #34292742;
  border-radius: 10px;
 
  input {
    color:  rgba(117, 117, 117, 1);
    font-family: Arial, Helvetica, sans-serif;

    background-color: #fff;
  
    height: 20px;
    border-radius: 10px;
  }
  input::placeholder{
    color:  rgba(117, 117, 117, 1);
    background-color: #fff;
  }
 
  ::after{
    border: none !important;
  }
  ::before{
    border: none!important;
  }
`

