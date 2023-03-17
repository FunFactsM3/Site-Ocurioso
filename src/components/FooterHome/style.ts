import styled from "styled-components";

export const FooterHomePageStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 122px;
  width: 100%;
  background-color: #e0e0e0;
  font-family: "Montserrat", sans-serif;
  gap:10px;

  position: absolute;
    bottom: 0;

  margin-top: 100px;

 
 
  p{
    font-size:14px;
  }
`;

export const FooterContainer = styled.div`
  border-bottom: 1px solid #FFFFFF;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap:8px;
  margin-bottom:10px;
    
  p {
    font-size:14px;
  }
`