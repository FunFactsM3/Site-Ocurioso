import styled from "styled-components";

export const CardHomePageStyled = styled.li`
  width: 380px;
  max-width: 90%;
  min-width: 280px;
  height: 680px;

  background-color: #f6f5f4;

  border-radius: 20px;

  align-items: center;
  justify-content: center;

  margin: 0 1rem 1rem 0;
  position: relative;

  h3 {
    border-bottom: 1px solid #e0e0e0;
    margin: 1rem;
    font-size: 26px;
    padding: 0 0 1rem 0;
  }

  p {
    color: #757575;
    margin: 1rem 1rem 3rem 1rem;
  }

  div {
    margin: 1rem;
    align-items: center;
    position: absolute;

    bottom: 15px;

    span {
      color: #f6f5f4;
      background-color: #82d74d;
      padding: 5px 10px;
      border-radius: 100px;
      margin: 1rem 1rem 0 0;
    }
    img {
      margin: -7px;
      cursor: pointer;
    }
  }

  @media (min-width: 1023px) {
    height: 560px;
  }
`;

export const IMGCardHomePageStyled = styled.img`
  width: 100%;
  cursor: pointer;

  border-radius: 20px 20px 0 0;
  height: 200px;
`;
