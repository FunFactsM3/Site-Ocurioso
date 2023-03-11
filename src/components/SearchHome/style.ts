import styled from "styled-components";

export const SearchHomePageStyled = styled.nav`
  height: 100px;

  gap: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  
  background-color:${({theme}) => theme.color.backgroundColorModal};

  border-radius: 20px;

  margin: 48px 16px;

  font-family: "Montserrat", sans-serif;
  input {
    width: 50%; height: 40px;


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

export const ImgStyle = styled.img`
  width: 25%; height: 100%;
  padding: 10px 0;

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
export const DivStyle = styled.div`
  width: 25%; height: 100%;
  padding: 10px;

  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

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
