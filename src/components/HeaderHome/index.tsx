import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "../../providers/ModalContext";
import { Turn as Hamburger } from "hamburger-react";
import { HeaderHomePageStyled, HamburguerDiv, MiniContainer, BigContainer } from "./style";
import { UserContext } from "../../providers/UserContext";
import Title from "../../assets/title.png";

export const HeaderHome = () => {
  const { menuOpen, setMenuOpen } = useContext(ModalContext);
  const { userLogout } = useContext(UserContext);
  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  
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
                <select name="" id="">
                  <option value="Todas">Categorias</option>
                  <option value="Arte e Cultura">Arte e Cultura</option>
                  <option value="Entretenimento">Entretenimento</option>
                  <option value="História">História</option>
                  <option value="Mundo">Mundo</option>
                  <option value="Terror e sobrenatural">Terror e sobrenatural</option>
                </select>
                <Link to={"/register"} type="submit"> Favoritos</Link>
              </nav>
            )}
          </HamburguerDiv>
        </MiniContainer>
        <p onClick={userLogout}>Sair →</p>
    </BigContainer>
  </HeaderHomePageStyled>
  );
};
