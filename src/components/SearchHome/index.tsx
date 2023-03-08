import React from "react";
import {
  ImgMicStyled,
  ImgSearchStyled,
  ImgworldStyled,
  SearchHomePageStyled,
} from "./style";

export const SearchHome = () => {
  return (
    <SearchHomePageStyled>
      <ImgworldStyled src="src/assets/mundo 1.png" alt="" />
      <input placeholder="Pesquise aqui" type="text" />
      <div>
        <ImgSearchStyled src="src/assets/Vector.png" alt="" />
        <ImgMicStyled src="src/assets/Vector.png" alt="" />
      </div>
    </SearchHomePageStyled>
  );
};
