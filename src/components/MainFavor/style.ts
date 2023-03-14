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

  margin: 0 0 0 1rem;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    overflow: none;
    justify-content: center;

    width: 80%;

  }
`;

export const StyledNull = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-family: Montserrat, sans-serif;
    width: 100%;
    background-color:  rgb(246, 245, 244);
    border-radius: 14px;
    margin: 0 0 180px 0;
    height: 90px;
    h1{
      color: #444444;
      font-size: 15px;
      border-bottom: 1px;
    }
@media (min-width: 768px){
    width: 80vw;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
    margin: 0 0 180px 0;
}
`
export const StyledLine = styled.div`
border-bottom: 1px solid #757575;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
`