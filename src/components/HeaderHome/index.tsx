import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { Turn as Hamburger } from "hamburger-react";
import { HeaderHomePageStyled } from "./style";
import { UserContext } from "../../providers/UserContext";
import Axios from "../../service/axios";
import { toast } from "react-toastify";

export const HeaderHome = () => {
  const { menuOpen, setMenuOpen } = useContext(ModalContext);
  const { setPostsList, PostsList } = useContext(UserContext);
  const { userLogout } = useContext(UserContext);

  const [ValueSelect, setValueSelect] = useState({ type: "Todos" });

  /*useEffect(() => {
    const type = localStorage.getItem("@USER");

    if (type === "young") {
      const LoadPostsdata = async (data: string) => {
        try {
          const response = await Axios.get("/posts");
          console.log(response.data);
          console.log(PostsList);
          setPostsList(response.data);
          const newList = PostsList.filter((Post) => Post.category === data);
          setPostsList(newList);
        } catch (error) {
          toast.error(`${error}`);
        }
      };
      LoadPostsdata(`${ValueSelect.type}`);
    } else {
      const LoadPostsdata = (data: string) => {
        try {
          const newList = PostsList.filter((Post) => Post.category === data);
          setPostsList(newList);
        } catch (error) {
          toast.error(`${error}`);
        }
      };
      LoadPostsdata(`${ValueSelect.type}`);
    }
  }, [ValueSelect]);*/

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HeaderHomePageStyled>
      <img src="src/assets/title.png" alt="Logo" />
      <div>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <Hamburger toggled={menuOpen} />
        </div>
        {menuOpen && (
          <nav className="menu">
            <select
              value={ValueSelect.type}
              name=""
              id=""
              onChange={(event) => setValueSelect({ type: event.target.value })}
            >
              <option value="">Categorias</option>
              <option value="Artes e Cultura">Artes e Cultura</option>
              <option value="Ciência e tecnologia">Ciência e tecnologia</option>
              <option value="Entretenimento">Entretenimento</option>
              <option value="História">História</option>
              <option value="Mundo">Mundo</option>
              <option value="Terror e sobrenatural">
                Terror e sobrenatural
              </option>
            </select>
            <button>Favoritos</button>
          </nav>
        )}
      </div>
      <p onClick={userLogout}>Sair →</p>
    </HeaderHomePageStyled>
  );
};
