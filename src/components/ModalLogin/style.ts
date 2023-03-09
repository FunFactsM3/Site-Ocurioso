import styled from "styled-components";


export const WrapperStyle = styled.div`
  width: 100vw; height: 100vh;

  position: absolute;
  top: 0; left: 0;
 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalAsideStyle = styled.div`
  width: min(90%, 800px); height: auto;
  padding: 20px 0;

  background-color: white;
  border-radius: 14px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  
  @media screen and (min-width: 1000px) {
    padding: 20px 10px;
  }
`
//TODO: add figcaption here 
export const ImageStyle = styled.div`
  width: 50%; height: 100%;

  background-color: white;

  display: none;
  @media screen and (min-width: 1000px) {
    width: 50%; height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
   img{
    width: 100%;
   }
  }
`
export const FormStyle = styled.div`
  width: 100%; height: 100%;
  padding: 10px 0;

  background-color: white;
  border-radius: 14px;

  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 1000px) {
    width: 50%; height: 100%;

    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`