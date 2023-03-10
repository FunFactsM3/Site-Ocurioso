import { TextField } from '@mui/material';
import Input from '@mui/material/Input';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)`
  width: 100%; height: 50px;

  background-color: ${({theme}) => theme.color.whiteColor};

  border-radius: 10px;

  input {
    font-family: Arial, Helvetica, sans-serif;

    height: 20px;  width: 100%; 
    
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.color.stroke};
    background-color: ${({theme}) => theme.color.whiteColor};
  }
  
  label {
    &.Mui-focused {
      color: ${({theme}) => theme.color.primaryGreyDark};
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover,
  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root{
    background-color: ${({theme}) => theme.color.primaryGreyLight};
  }
  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root::before{
    border: none!important;
  }
  .css-1ff8729-MuiInputBase-root-MuiFilledInput-root::after{
    border: none!important;
  }
`;

export const ParagraphErrorStyle = styled.p`
  color: ${({theme}) => theme.color.primaryRed} ;
  align-self: flex-start;
  font-family:"Open Sans";
  font-size: 0.62rem;
  font-weight: 400;
  line-height: 14px;
`
export const StyleInputPassword = styled(Input)`
  width: 100%; height: 50px;

  border-radius: 10px;

  input {
    width: 100%; height: 100%;
    padding: 0 10px;

    color: ${({theme}) => theme.color.primaryGreyDark};
    font-family: Arial, Helvetica, sans-serif;

    background-color: ${({theme}) => theme.color.whiteColor};
      
    border-bottom: 1px solid ${({theme}) => theme.color.stroke};
    border-radius: 10px;

  }
  input::placeholder{
    color: ${({theme}) => theme.color.primaryGreyDark};
    background-color: ${({theme}) => theme.color.whiteColor};

    padding: 0 10px;
  }
  .css-q0jhri-MuiInputBase-root-MuiInput-root{
    border-bottom: 1px solid ${({theme}) => theme.color.stroke};
  }
  ::after{
    border: none !important;
  }
  ::before{
    border: none!important;
  }
`;