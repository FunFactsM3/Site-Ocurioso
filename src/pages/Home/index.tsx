import React from "react";
import { Container, HomePageStyled } from "./style";

import { SearchHome } from "../../components/SearchHome";
import { MainHome } from "../../components/MainHome";
import { FooterHome } from "../../components/FooterHome";
import { ModalHome } from "../../components/ModalHome";
import { HeaderHome } from "../../components/Header/HeaderHome";

const DashBoardPage = () => {

  return (
    <>
      <HomePageStyled>
        <HeaderHome />
        <SearchHome />
        <Container>
          <MainHome />
        </Container>
        <FooterHome />
        <ModalHome />
      </HomePageStyled>
    </>
  );
};

export default DashBoardPage;
