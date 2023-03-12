import React, { useContext } from "react";
import { HeaderHome } from "../../components/HeaderHome";
import { HomePageStyled } from "./style";
import { SearchHome } from "../../components/SearchHome";
import { MainHome } from "../../components/MainHome";
import { FooterHome } from "../../components/FooterHome";
import { ModalHome } from "../../components/ModalHome";
import { UserContext } from "../../providers/UserContext";

const DashBoardPage = () => {

  return (
    <>
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
