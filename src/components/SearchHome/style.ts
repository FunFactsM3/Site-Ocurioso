import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export const SearchHomePageStyled = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: rgb(246, 245, 244);
  border-radius: 20px;
  margin: 35px 10px;
  font-family: Montserrat, sans-serif;
  width: 90%;
  
  background-color:${({theme}) => theme.color.backgroundColorModal};
  border-radius: 20px;

  margin: 48px 16px;

  input {
    width: 50%; height: 40px;
    padding: 0 0 0 10px;
    border: 1px solid #757575;
    background-color: #F6F5F4;
    border-radius: 12px;
    font-size: 12px;
    color: #F6F5F4;
    font-weight: 300;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid #757575;
    border-radius: 12px;
    outline: 0;
  }

  @media (min-width: 768px) {
    width: 80vw;
    display: flex;
    align-items: center;
    flex-direction: row;

    justify-content: space-evenly;
  }

  @media (min-width: 1400px) {
    input {
      width: 80%;
    }
  }
`;

export const ImgStyle = styled.img`
  width: 91px;
  height: 75px;
  padding: 10px 0;

  @media (min-width: 768px) {
    width: 110px;
    height: 90px;
  }

  @media (min-width: 1023px) {
    width: 130px;
    height: 100px;
  }
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
    width: 25%;
    padding: 10px;
    gap: 4px;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      width: 25%;
      padding: 10px;
      gap: 4px;
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
    }
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
