import styled from "styled-components";


export const WrapperStyle = styled.div`
  width: 100vw; height: 100vh;

  position: absolute;
  top: 0; left: 0;
 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.backgroundColorModal};
`
export const ModalAsideStyle = styled.div`
  width: min(90%, 900px); height: 620px;
  padding: 10px 0;

  background-color: ${({theme}) => theme.color.primaryGreyLight};
  border-radius: 14px;

  display: flex;
  flex-direction: row;

  position: relative;
  
  @media screen and (min-width: 1000px) {
    width: min(90%, 900px); height: 680px;
    padding: 10px;

    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px;
  }
`
//TODO: add figcaption here 
export const ImageStyle = styled.div`
  width: 50%; height: 100%;

  background-color: transparent;

  display: none;
  @media screen and (min-width: 1000px) {
    width: 50%; height: 100%;

    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-radius: 16px;
   img{
    width: 100%; height: 100%;

    border-radius: 16px;
   }
  }
`
export const FormStyle = styled.div`
  width: 100%; height: 100%;
  padding: 10px 0;

  background-color: ${({theme}) => theme.color.primaryGreyLight};
  border-radius: 14px;

  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (min-width: 1000px) {
    width: 45%; height: 100%; margin: 0 auto;
    
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
