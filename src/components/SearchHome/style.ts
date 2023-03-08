import styled from "styled-components";

export const SearchHomePageStyled = styled.nav`
  display: flex;
  align-items: center;

  background-color: #f6f5f4;

  border-radius: 20px;

  margin: 3rem 1rem;

  font-family: "Montserrat", sans-serif;
  input {
    height: 40px;
    width: 70%;

    padding: 0 0 0 5px;

    border: 1px solid #757575;
    border-radius: 12px;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid #757575;
    border-radius: 12px;
    outline: 0;
  }

  @media (min-width: 1400px) {
    input {
      width: 80%;
    }
  }
`;

export const ImgworldStyled = styled.img`
  width: 85px;
  height: 70px;
`;

export const ImgSearchStyled = styled.img`
  background-color: #82d74d;
  padding: 8px 18px;
  margin: 5px 5px 0 5px;
  border-radius: 14px;
  cursor: pointer;

  @media (min-width: 1023px) {
    padding: 10px 28px;
    margin: 0 0 0 1rem;
  }
`;

export const ImgMicStyled = styled.img`
  background-color: #e9425a;
  padding: 8px 18px;
  margin: 0 5px 0 5px;
  border-radius: 14px;
  cursor: pointer;

  @media (min-width: 1023px) {
    padding: 10px 28px;
    margin: 0 0 0 1rem;
  }
`;
