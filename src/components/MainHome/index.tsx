import React, { useContext } from "react";
import { DashContext } from "../../providers/DashContext";
import { IPosts } from "../../providers/types/type";
import { Card } from "./Card";
import { UlHomePageStyled } from "./style";

export const MainHome = () => {
  const { PostsFilter } = useContext(DashContext);

  return (
    <UlHomePageStyled>
      {PostsFilter.map((Post: IPosts) => (
        <Card key={Post.id} Post={Post} />
      ))}
    </UlHomePageStyled>
  );
};
