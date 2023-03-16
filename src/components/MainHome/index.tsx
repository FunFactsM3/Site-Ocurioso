import React, { useContext } from "react";
import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import { DashContext } from "../../providers/DashContext";
import { Card } from "./Card";
import { UlHomePageStyled} from "./style";
import { StyledLine, StyledNull } from "./style";
import { Decrypt } from "../../utils/Encryptor";




export const MainHome = () => {
  const { searchValue } = useContext(UserContext)
  const { PostsFilter } = useContext(DashContext);
  const result = PostsFilter?.filter((Post:IPosts) => (Post.title.toLowerCase().includes(searchValue.toLowerCase()) || Post.category.toLowerCase().includes(searchValue.toLowerCase())))
  
  const name = localStorage.getItem("@CuriosoName:") || 'D3VFR0N7'

  const a = () => {
    if(searchValue.length === 0){
      return (
        PostsFilter?.map((Post:IPosts) => (
          <Card key={Post.id} Post={Post} />
        ))
      )
    }else if(searchValue.length > 0 && result.length  === 0){
      return (

        <StyledNull>
          <h1>Olá {Decrypt(name)}! Não temos essa curiosidade sobre: {searchValue}</h1> 
          <StyledLine></StyledLine>
          <h1>Pesquisa não encontrada :(</h1> 
        </StyledNull>
      )
    }else{
     return (
      PostsFilter?.filter((Post:IPosts) => (Post.title.toLowerCase().includes(searchValue.toLowerCase()) || Post.category.toLowerCase().includes(searchValue.toLowerCase()))).map((Post:IPosts) => (
        <Card key={Post.id} Post={Post} />
      ))
     )
    }

  }

  return (
    <UlHomePageStyled>
      <>
      {
        // searchValue.length === 0
        // ? PostsFilter?.map((Post:IPosts) => (
        //   <Card key={Post.id} Post={Post} />
        // ))
        // : PostsFilter?.filter((Post:IPosts) => (Post.title.toLowerCase().includes(searchValue.toLowerCase()) || Post.category.toLowerCase().includes(searchValue.toLowerCase()))).map((Post:IPosts) => (
        //   <Card key={Post.id} Post={Post} />
        // ))
        a()
  }
    </>
    </UlHomePageStyled>


  );
 }


