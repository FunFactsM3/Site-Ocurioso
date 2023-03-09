import styled from "styled-components";


export const WrapperStyle = styled.div`
  width: 100vw; height: 100vh;

  position: absolute;
  top: 0; left: 0;
 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  /* img{
    position:absolute;
    right:43%;
    bottom:4%;
  } */
`
export const ModalAsideStyle = styled.div`
  width: min(90%, 800px); height: auto;
  padding: 20px 0;

  background-color: white;
  border-radius: 14px;

  display: flex;
  flex-direction: row;
  @media screen and (min-width: 1000px) {
    padding: 20px 10px;
  }
`
//TODO: add figcaption here 
export const ImageStyle = styled.div`
  width: 50%; height: 100%;

  background-color: red;

  display: none;
  @media screen and (min-width: 1000px) {
    width: 50%; height: 460px;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-radius: 14px;
   img{
    width: 100%; height: 100%;
   }
  }
`
export const FormStyle = styled.form`
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
// export const StyledModalOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   cursor: pointer;
// `
// export const StyledModalClose = styled.button`
//   position: absolute;
//   top: 0.5rem;
//   color:black;
//   right: 0.5rem;
//   padding: 0.5rem;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   font-size: 1.25rem;
  
// `
// export const StyledModalTittle = styled.div`
//     width: 66px;
//     height: 26px;
//     font-family: "Open Sans";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 24px;
//     line-height: 110%;
//     color: rgb(44, 35, 86);
//     margin-left: 75%;
//     padding-top: 40px;
//     border: 1px solid red;
// `
// export const StyledModalContent = styled.div`
//    margin-top:50px;
//    font-size: 1.25rem;
//    border: 1px solid red;
// `
