import { TextField } from '@mui/material';
import Input from '@mui/material/Input';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  width: 100%; 
  background-color: var(--white-color);
  box-shadow: 0 22px 45.8px -11.45px #34292742;

  input {
    font-family: Arial, Helvetica, sans-serif;
    height: 20px;  width: 100%; 
    border-radius: 10px;
    border: none;
    background-color: var(--white-color);
  }
  
  label {
    &.Mui-focused {
      color:  var(--primary-grey-dark);
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

  background-color: var(--white-color);

  box-shadow: 0 22px 45.8px -11.45px #34292742;
  border-radius: 10px;
 
  input {
    color: var(--primary-grey-dark);
    font-family: Arial, Helvetica, sans-serif;

    background-color: var(--white-color);
  
    height: 20px;
    border-radius: 10px;
  }
  input::placeholder{
    color: var(--primary-grey-dark);
    background-color: var(--white-color);
  }
 
  ::after{
    border: none !important;
  }
  ::before{
    border: none!important;
  }
`;