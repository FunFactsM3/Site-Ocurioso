import React, { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { Turn as Hamburger } from "hamburger-react";
import { UserContext } from "../../../providers/UserContext";
import { BigContainer, HamburguerDiv, HeaderHomePageStyled, MiniContainer, HamburguerDesktop } from "./styles";
import { DashContext } from "../../../providers/DashContext";
import Title from "../../../assets/title.png";
import { Link } from "react-router-dom";


export const HeaderHome = () => {
  const { menuOpen, setMenuOpen } = useContext(ModalContext);
  const { setValueSelect, ValueSelect, LoadPostsdata, favoritPage } =
  useContext(DashContext);
  const { userLogout } = useContext(UserContext);
  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const type = localStorage.getItem("@USER");

  if (type === "young") {
  
  return (
    <HeaderHomePageStyled>
    <BigContainer>
        <MiniContainer>
        <img src={Title} alt="Logo" />
          <HamburguerDiv>
            <div className="menu-icon" onClick={handleMenuToggle}>
              <Hamburger toggled={menuOpen} />
            </div>
            {menuOpen && (
            <nav className="menu">
              <select
                value={ValueSelect.type}
                name=""
                id=""
                onChange={(event) => {
                  setValueSelect({ type: event.target.value }),
                    LoadPostsdata(`${ValueSelect.type}`);
                }}
              >
                <option value="">Categorias</option>
                <option value="Artes e Cultura">Artes e Cultura</option>
                <option value="Ciência e tecnologia">
                  Ciência e tecnologia
                </option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="História">História</option>
                <option value="Mundo">Mundo</option>
                <option value="Terror e sobrenatural">
                  Terror e sobrenatural
                </option>
              </select>
              <Link to={"/favorites"} type="submit">Favoritos</Link>             
            </nav>
          )}
          </HamburguerDiv>
          <HamburguerDesktop>
              <select
                value={ValueSelect.type}
                name=""
                id=""
                onChange={(event) => {
                  setValueSelect({ type: event.target.value }),
                    LoadPostsdata(`${ValueSelect.type}`);
                }}
              >
                <option value="">Categorias</option>
                <option value="Artes e Cultura">Artes e Cultura</option>
                <option value="Ciência e tecnologia">
                  Ciência e tecnologia
                </option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="História">História</option>
                <option value="Mundo">Mundo</option>
                <option value="Terror e sobrenatural">
                  Terror e sobrenatural
                </option>
              </select>
              <Link to={"/favorites"} type="submit">Favoritos</Link>             
            </HamburguerDesktop>
        </MiniContainer>
        <p onClick={userLogout}>Sair →</p>
    </BigContainer>
  </HeaderHomePageStyled>
  )
  }else{

    return (
      <HeaderHomePageStyled>
      <BigContainer>
          <MiniContainer>
          <img src={Title} alt="Logo" />
            <HamburguerDiv>
              <div className="menu-icon" onClick={handleMenuToggle}>
                <Hamburger toggled={menuOpen} />
              </div>
              {menuOpen && (
            <nav className="menu">
              <select
                value={ValueSelect.type}
                name=""
                id=""
                onChange={(event) => {
                  setValueSelect({ type: event.target.value }),
                    LoadPostsdata(`${ValueSelect.type}`);
                }}
              >
                <option value="">Categorias</option>
                <option value="Artes e Cultura">Artes e Cultura</option>
                <option value="Ciência e tecnologia">
                  Ciência e tecnologia
                </option>
                <option value="Entretenimento">Entretenimento</option>
                <option value="História">História</option>
                <option value="Mundo">Mundo</option>
              </select>
              <Link to={"/favorites"} type="submit">Favoritos</Link>             

            </nav>
          )}
            </HamburguerDiv>
          </MiniContainer>
          <p onClick={userLogout}>Sair →</p>
      </BigContainer>
    </HeaderHomePageStyled>
    )
  }
};
