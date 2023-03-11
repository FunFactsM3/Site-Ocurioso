import React, { useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { Turn as Hamburger } from "hamburger-react";
import { HeaderHomePageStyled } from "./style";

export const HeaderHome = () => {
  const { menuOpen, setMenuOpen } = useContext(ModalContext);

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
            <select name="" id="">
              <option value="Todas">Categorias</option>
              <option value="Terror">Terror</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Artes">Artes</option>
              <option value="Mundo">Mundo</option>
            </select>
            <button>Favoritos</button>
          </nav>
        )}
      </div>
     
      <p>Sair →</p>
    </HeaderHomePageStyled>
  );
};
