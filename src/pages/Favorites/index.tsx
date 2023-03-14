import React from "react";
import { FavoPageStyled } from "./style";
import { SearchHome } from "../../components/SearchHome";
import { FooterHome } from "../../components/FooterHome";
import { ModalHome } from "../../components/ModalHome";
import { MainFavor } from "../../components/MainFavor";
import { Headerfavor } from "../../components/Header/HeaderFavo";

const FavortitesPage = () => {

  return (
    <>
      <FavoPageStyled>
        <Headerfavor />
        <SearchHome />
        <MainFavor />
        <FooterHome />
        <ModalHome />
      </FavoPageStyled>
    </>
  );
};

export default FavortitesPage;
