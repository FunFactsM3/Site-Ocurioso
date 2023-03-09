import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchFormStyledRegister = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 7px;
    max-width: 100%;
    margin-left: 60%;
`;

export const StyledInputName = styled.input`
    width: 240px;
    height: 40px;
    background: var(--white-color);
    border-bottom: 1px solid var(--primary-grey-medium);
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
    outline: none;
`
export const StyledInputEmail = styled.input`
    width: 240px;
    height: 40px;
    background: var(--white-color);
    border-bottom: 1px solid var(--primary-grey-medium);
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
`
export const StyledInputPass = styled.input`
    width: 240px;
    height: 40px;
    background: var(--white-color);
    border-bottom: 1px solid var(--primary-grey-medium);
    border-radius: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    padding-left:10px;
`
export const StyledInputConfirmPass = styled.input`
    width: 240px;
    height: 40px;
    background: var(--white-color);
    border-bottom: 1px solid var(--primary-grey-medium);
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
    background: var(--white-color);
    border-bottom: 1px solid var(--primary-grey-medium);
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
    background-color: var(--white-color);
    border-bottom: 1px solid var(--primary-grey-medium);
    border-top:none;
    border-left:none;
    border-right:none;
  }
`;

export const StyledButtonLogin = styled.div`
  width: 240px;
  height: 36px;
  background: var(--primary-green);
  border-radius: 12px;
  display:flex;
  align-items:center;
  justify-content: center;
  letter-spacing: -0.04em;
  color: var(--white-color);
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
  color: var(--primary-grey-dark);
  flex: none;
  text-align: center;
`;

export const StyledButtonRegister = styled.button`
  width: 240px;
  height: 36px;
  background:var(--primary-red);
  border-radius: 12px;
  display:flex;
  align-items:center;
  justify-content: center;
  letter-spacing: -0.04em;
  color: var(--white-color);
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

