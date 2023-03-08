import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchFormStyledRegister = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    gap: 7px;
    max-width: 100%;
    margin-left: 60%;
`;

export const StyledInputName = styled.input`
    width: 240px;
    height: 40px;
    background: #ffffff;
    border-bottom: 1px solid #c3dce3;
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
`
export const StyledInputEmail = styled.input`
    width: 240px;
    height: 40px;
    background: #ffffff;
    border-bottom: 1px solid #c3dce3;
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
`
export const StyledInputPass = styled.input`
    width: 240px;
    height: 40px;
    background: #ffffff;
    border-bottom: 1px solid #c3dce3;
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
`
export const StyledInputConfirmPass = styled.input`
    width: 240px;
    height: 40px;
    background: #ffffff;
    border-bottom: 1px solid #c3dce3;
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
`
export const StyledDivEmail = styled.div`
  input::placeholder {
    padding-left: 10px;
  }

  input {
    width: 240px;
    height: 40px;
    background: #ffffff;
    border-bottom: 1px solid #c3dce3;
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
  }
`;

export const StyledDivPassword = styled.div`
  input::placeholder {
    padding-left: 10px;
  }

  input {
    width: 240px;
    height: 40px;
    border-radius: 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #c3dce3;
    border-top:none;
    border-left:none;
    border-right:none;
  }
`;

export const StyledButtonLogin = styled.div`
  width: 240px;
  height: 36px;
  background: #82d74d;
  border-radius: 12px;
  display:flex;
  align-items:center;
  justify-content: center;
  letter-spacing: -0.04em;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 14px;
  font-weight: 700;
  font-size: 14px;
`;

export const StyledSpanDescription = styled.span`
  width: 140px;
  height: 12px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #757575;
  flex: none;
  text-align: center;
`;

export const StyledButtonRegister = styled.button`
  width: 240px;
  height: 36px;
  background: #E9425A;
  border-radius: 12px;
  display:flex;
  align-items:center;
  justify-content: center;
  letter-spacing: -0.04em;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 14px;
  font-weight: 700;
  font-size: 14px;
  border:none;
  margin-top:5px;
`
  export const TextLink = styled(Link)`
  text-decoration: none;
`

