import styled from "styled-components";

export const UlHomePageStyled = styled.ul`
  font-family: "Montserrat", sans-serif;

  display: flex;
  overflow-x: auto;

  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    overflow: none;
    justify-content: center;

    height: auto; width: 80%;
  }
`;

export const StyledNull = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-family: Montserrat, sans-serif;
    width: 100%;
    background-color:${({theme}) => theme.color.backgroundColorModal};
    border-radius: 14px;
    margin: 48px 16px;
    height: 90px;

    h1{
      color:${({theme}) => theme.color.backgroudnColorTitle};
      font-size: 15px;
      border-bottom: 1px;
    }

@media (min-width: 768px){
    width: 80vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
}
`
export const StyledLine = styled.div`
border-bottom: 1px solid #757575;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
`