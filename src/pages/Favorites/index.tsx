import React from "react";
import { HeaderHome } from "../../components/Header/HeaderHome";
import { FavoPageStyled } from "./style";
import { SearchHome } from "../../components/SearchHome";
import { MainHome } from "../../components/MainHome";
import { FooterHome } from "../../components/FooterHome";
import { ModalHome } from "../../components/ModalHome";
import { MainFavor } from "../../components/MainFavor";

const FavortitesPage = () => {

  return (
    <>
      <FavoPageStyled>
        <HeaderHome />
        <SearchHome />
        <MainFavor />
        <FooterHome />
        <ModalHome />
      </FavoPageStyled>
    </>
  );
};

export default FavortitesPage;
