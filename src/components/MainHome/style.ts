import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
`
export const UlHomePageStyled = styled.ul`
  font-family: "Montserrat", sans-serif;
 
  overflow-x: auto;

  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin: 0 0 0 1rem;

  gap: 10px;
  display: flex;
  flex-direction: row;


  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow: none;
    justify-content: center;

    height: auto; width: 80%;
    margin-bottom: 210px;

    overflow-y: hidden;
  }
`;
export const StyledNull = styled.div`
    width: 80vw; height: auto;
    padding:  20px; margin-bottom: 10px;

    gap: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    background-color:${({theme}) => theme.color.backgroundColorModal};
    border-radius: 14px;

    h1{
      color:${({theme}) => theme.color.backgroudnColorTitle};
      font-size: 15px;
      border-bottom: 1px;
    }

@media (min-width: 768px){
    width: 80vw; height: 15vh;
    padding: 0 20px;

    gap: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}
`

export const StyledLine = styled.div`
  width: 100%; height: 1px;

  background-color: #757575;
`
