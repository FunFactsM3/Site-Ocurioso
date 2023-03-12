import styled from "styled-components";

export const StyledModalHome = styled.div`
  position: absolute;
  top: 600px;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #f6f5f4;

  width: 600px;
  max-width: 90%;

  font-family: "Montserrat", sans-serif;
  border-radius: 20px;

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;

    padding: 10px;
    color: #757575;

    background-color: #e0e0e0 50%;
    border-radius: 50%;
  }

  h3 {
    border-bottom: 1px solid #e0e0e0;
    margin: 1rem 1rem 1rem 2rem;
    font-size: 26px;
    padding: 0 0 1rem 0;
  }

  p {
    color: #757575;
    margin: 1rem 1rem 1rem 2rem;
    font-size: 14px;
  }

  div {
    margin: 2rem 1rem 1.5rem 2rem;
    align-items: center;

    span {
      color: #f6f5f4;
      background-color: #82d74d;
      padding: 5px 10px;
      border-radius: 100px;
      margin: 1rem 2rem 0 0;
    }
    img {
      margin: -7px;
    }
  }
`;

export const IMGModalHomePageStyled = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 200px;

  @media (min-width: 374px) {
    height: 250px;
  }
  @media (min-width: 424px) {
    height: 270px;
  }
  @media (min-width: 525px) {
    height: 310px;
  }
  @media (min-width: 620px) {
    height: 370px;
  }
`;
