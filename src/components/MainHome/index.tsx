import React, { useContext } from "react";

import { IPosts } from "../../providers/types/Interface";
import { UserContext } from "../../providers/UserContext";
import { DashContext } from "../../providers/DashContext";
import { Card } from "./Card";
import { UlHomePageStyled } from "./style";

export const MainHome = () => {
  const { searchValue } = useContext(UserContext)
  // const [postList, setPostList] = useState<IPosts[]>([]);

  //  useEffect(() => {
  //   const renderCart = async () =>{
  //     try {
  //       const response = await axios.get('https://site-ocurioso.onrender.com/posts');
  //       setPostList(response.data);  
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   renderCart()
  
  // },[])
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



     // {PostsFilter.map((Post: IPosts) => (
          //     <Card key={item.id} item={item} />
          //   ));
          // }


     
    //  <key={Post.id} Post={Post} />
    //   ))}