import React, { useContext } from "react";

import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import { DashContext } from "../../providers/DashContext";
import { UlHomePageStyled, StyledNull, StyledLine } from "./style";
import { Card } from "../MainHome/Card";

export const MainFavor = () => {
  const { searchValue } = useContext(UserContext);
  const { PostsFavorits, PostsFilterFav } = useContext(DashContext);

  return (
    <UlHomePageStyled>
      <>
        {PostsFilterFav.length > 0 ? (
          PostsFilterFav?.filter(
            (Post: IPosts) =>
              Post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              Post.category.toLowerCase().includes(searchValue.toLowerCase())
          ).map((Post: IPosts) => <Card key={Post.id} Post={Post} />)
        ) : (
          <StyledNull>
            <StyledLine>
              <h1>Você ainda não adicionou curiosidades!</h1>
            </StyledLine>
          </StyledNull>
        )}
      </>
    </UlHomePageStyled>
  );
};
