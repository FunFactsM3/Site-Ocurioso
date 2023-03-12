import React, { useContext, useState } from "react";
import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import axios from "../../service/axios";
import { Card } from "./Card";
import { UlHomePageStyled } from "./style";

export const MainHome = () => {
  const { searchValue,setSearchValue} = useContext(UserContext)
  const [postList, setPostList] = useState<IPosts[] | null>(null);

  const renderCart = async () =>{
    try {
      const response = await axios.get('https://site-ocurioso.onrender.com/posts');
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <UlHomePageStyled>
     <>
     {
       searchValue === "nada"
       ? console.log("renderização condicional")
       : 
        postList?.filter((item) => (item.title === searchValue || item.category === searchValue)(
          <Card item={item}/>

        )
        )
    
     }
     </>
    </UlHomePageStyled>
  );
};
