import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormLoginStyle = styled.form`
    width: 90%; height: 75%;

    gap: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    position: relative;
    h1 {
      font-family: 'Open Sans', sans-serif;
      color: var(--primary-grey-dark);
    }
`;

export const StyledDivPassword = styled.div`
  input::placeholder {
    padding-left: 10px;
  }

  input {
    width: 240px;
    height: 40px;
  }
`;

export const StyledButtonLogin = styled.button`
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
  background: var(--primary-red);
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
`
export const TextLink = styled(Link)`
  text-decoration: none;
`
