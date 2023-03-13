import React, { useContext } from "react";

import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import { DashContext } from "../../providers/DashContext";
import { Card } from "./Card";
import { UlHomePageStyled } from "./style";

export const MainHome = () => {
  const { searchValue } = useContext(UserContext)
  const { PostsFilter } = useContext(DashContext);

  return (
    <UlHomePageStyled>
      <>
      {
        searchValue.length === 0
        ? PostsFilter?.map((Post:IPosts) => (
          <Card key={Post.id} Post={Post} />
        ))
        : PostsFilter?.filter((Post:IPosts) => (Post.title.toLowerCase().includes(searchValue.toLowerCase()) || Post.category.toLowerCase().includes(searchValue.toLowerCase()))).map((Post:IPosts) => (
          <Card key={Post.id} Post={Post} />
        ))
      }
    </>
    </UlHomePageStyled>
  );
 }


