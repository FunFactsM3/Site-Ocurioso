import React, { useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { ModalContext } from "../../providers/ModalContext";
import { HeaderHome } from "../../components/HeaderHome";
import { GlobalStyles } from "../../styles/global";
import { HomePageStyled } from "./style";
import { SearchHome } from "../../components/SearchHome";
import { MainHome } from "../../components/MainHome";
import { FooterHome } from "../../components/FooterHome";
import { ModalHome } from "../../components/ModalHome";

const DashBoardPage = () => {
  return (
    <>
      <GlobalStyles />
      <HomePageStyled>
        <HeaderHome />
        <SearchHome />
        <MainHome />
        <FooterHome />
        <ModalHome />
      </HomePageStyled>
    </>
  );
};

export default DashBoardPage;
