import React, { useContext, useState } from "react";
import { IPosts } from "../../providers/types/type";
import { UserContext } from "../../providers/UserContext";
import { Card } from "./Card";
import { UlHomePageStyled } from "./style";

export const MainHome = () => {
  const { PostsList } = useContext(UserContext);

  return (
    <UlHomePageStyled>
      {PostsList.map((Post: IPosts) => (
        <Card key={Post.id} Post={Post} />
      ))}
    </UlHomePageStyled>
  );
};
