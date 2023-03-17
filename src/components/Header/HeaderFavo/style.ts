import styled from "styled-components";

export const HeaderHomePageStyled = styled.header`
    height: 80px; width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    background-color: #2C2356;
    width: 100%;
  img{
    width: 120px;
  }
  p {
    color: #F6F5F4;
    padding: 0 1.2rem 0 0;
    cursor: pointer;
  }
  select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
  }
  button {
      color: #757575;
      border-radius: 0 0 20px 20px;
      padding: 10px 10px;
  }
`;

export const BigContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
      width: 80vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
`;

export const MiniContainer = styled.div`
  gap: 20px;
  display: flex;
  align-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  height: 100px;

  select{
    font-family: Montserrat, sans-serif;
    font-size: 18px;
  }
`
export const HamburguerDiv = styled.div`
  color: #F6F5F4;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50%;
  nav {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.backgroundColorModal};
    padding: 7px 7px;
    gap:5px;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    width: 110px;
  }
  
    select {
      background-color:${({theme}) => theme.color.backgroundColorModal};
      border-radius: 10px;
      cursor: pointer;
      font-size: 13px;
    }
    a{
      color: #757575;
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      font-size: 13px;
      padding-left:3px;
    }
    @media (min-width: 768px) {
      nav {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background-color: ${({theme}) => theme.color.backgroundColorModal};
        padding: 7px 7px;
        gap:5px;
        font-family: Montserrat, sans-serif;
        width: 200px;
        height:100px;
    }
        select {
          color:${({theme}) => theme.color.backgroudnColorTitle};
          background-color:${({theme}) => theme.color.backgroundColorModal};

          border-radius: 10px;
          cursor: pointer;
          font-size: 18px;
        }
        a{
          color:${({theme}) => theme.color.backgroudnColorTitle};
          cursor: pointer;
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
          padding-left:3px;
        }
    }
`