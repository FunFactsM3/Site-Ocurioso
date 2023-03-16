import styled from "styled-components";

export const WrapperStyles = styled.div`
  width: 100%; height: 100%;
  z-index:1;
  position: absolute;
  top: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${({theme}) => theme.color.backgroundColorWrappper};
`

export const StyledModalHome = styled.div`
  position: fixed;
  top: 480px;
  left: 50%;
  z-index:2;
  transform: translate(-50%, -50%);

  background-color: ${({theme}) => theme.color.backgroundColorModal};

  /* width: 600px;
  max-width: 90%; */
  width: min(90%,500px);
  height: 80%;

  overflow-y: auto;

  // box-shadow: 0 0 20px 12px #2C2C2C;

  font-family: "Montserrat", sans-serif;
  border-radius: 20px;

  @media screen and (min-width: 1000px) {
    overflow-y: hidden;
    width: min(50%,650px);
    height: auto;
  }

  
  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 10px;
    color: rgb(117, 117, 117);
    opacity: 0.7;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  h3 {
    border-bottom: 1px solid #e0e0e0;
    margin: 1rem 1rem 1rem 2rem;
    font-size: 26px;
    padding: 0 0 1rem 0;
    color: ${({theme}) => theme.color.backgroudnColorTitle};

  }

  p {
    color:${({theme}) => theme.color.backgroudnColorTitle};
    margin: 1rem 2rem 1rem 2rem;
    font-size: 14px;
    text-align: justify;
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
      cursor: pointer;
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

export const WrapperStyle = styled.aside`
  display: flex;
  background-color: red;
  width: 100%; height: 100%;
`