import styled from "styled-components";

export const modalLoginStyled = styled.div`

`
export const StyledDivModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);

  img{
    position:absolute;
    right:43%;
    bottom:4%;
  }
`
export const StyledModalBox = styled.div`
  position: relative;
  padding: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  z-index: 200;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  width: 792px;
  height: 440px;
  `
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  `
export const StyledModalClose = styled.button`
  position: absolute;
  top: 0.5rem;
  color:black;
  right: 0.5rem;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  
  `
export const StyledModalTittle = styled.div`
    width: 66px;
    height: 26px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: rgb(44, 35, 86);
    margin-left: 75%;
    padding-top: 40px;
  `
export const StyledModalContent = styled.div`
   margin-top:50px;
   font-size: 1.25rem;
`
