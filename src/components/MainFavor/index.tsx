import React, { useContext } from "react";

import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import { DashContext } from "../../providers/DashContext";
import { UlHomePageStyled } from "./style";
import { Card } from "../MainHome/Card";

export const MainFavor = () => {
  const { searchValue } = useContext(UserContext)
  const { PostsFavorits } = useContext(DashContext);

  return (
    <UlHomePageStyled>
      <>
      {
        PostsFavorits.length > 0
        ? PostsFavorits?.filter((Post:IPosts) => (Post.title.toLowerCase().includes(searchValue.toLowerCase()) || Post.category.toLowerCase().includes(searchValue.toLowerCase()))).map((Post:IPosts) => (
          <Card key={Post.id} Post={Post} />
        ))
        : <h1>Nada</h1>
      }
      </>
    </UlHomePageStyled>
  );
 }


