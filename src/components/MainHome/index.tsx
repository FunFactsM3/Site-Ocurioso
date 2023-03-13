import React, { useContext, useEffect, useState } from "react";
import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import axios from "../../service/axios";
import { Card } from "./Card";
import { UlHomePageStyled } from "./style";

export const MainHome = () => {
  const { searchValue } = useContext(UserContext)
  const [postList, setPostList] = useState<IPosts[]>([]);

   useEffect(() => {
    const renderCart = async () =>{
      try {
        const response = await axios.get('https://site-ocurioso.onrender.com/posts');
        setPostList(response.data);
        console.log(response.data);
  
      } catch (error) {
        console.error(error)
      }
    }
    renderCart()
  
  },[]) // vem do Gedson
  return (
    <UlHomePageStyled>
     <>
     {
       searchValue.length === 0
       ? postList?.map((item) => (
          <Card key={item.id} item={item} />
        ))
       : postList?.filter((item) => (item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.category.toLowerCase().includes(searchValue.toLowerCase()))).map((item) => (
          <Card key={item.id} item={item} />
       ))
     }
     
     </>
    </UlHomePageStyled>
  );
};
