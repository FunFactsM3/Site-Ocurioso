import React, { useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { ModalContext } from "../../providers/ModalContext";
import { HeaderHome } from "../../components/HeaderHome";
import { GlobalStyles } from "../../styles/global";
import { HomePageStyled } from "./style";
import { SearchHome } from "../../components/SearchHome";
import { MainHome } from "../../components/MainHome";
import { FooterHome } from "../../components/FooterHome";

const DashBoardPage = () => {
  return (
    <>
      <GlobalStyles />
      <HomePageStyled>
        <HeaderHome />
        <SearchHome />
        <MainHome />
        <FooterHome />
      </HomePageStyled>
    </>
  );
};

export default DashBoardPage;
