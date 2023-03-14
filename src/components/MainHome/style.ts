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


  @media (min-width: 769px) {
    flex-wrap: wrap;
    overflow: none;
    justify-content: center;

    width: 80%;
    overflow-y: hidden;


  }
`;
