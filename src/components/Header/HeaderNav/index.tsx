import React, { useContext } from "react";
import { ModalContext } from "../../../providers/ModalContext";
import { Turn as Hamburger } from "hamburger-react";
import { HeaderHomePageStyled } from "./style";
import { UserContext } from "../../../providers/UserContext";

import { DashContext } from "../../../providers/DashContext";
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
              <button
                onClick={() => {
                  favoritPage();
                }}
              >
                Favoritos
              </button>
            </nav>
          )}
        </div>
        <p onClick={userLogout}>Sair →</p>
      </HeaderHomePageStyled>
    );
  } else {
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
              <Link to="/Home"  />
            </nav>
          )}
        </div>
        <p onClick={userLogout}>Sair →</p>
      </HeaderHomePageStyled>
    );
  }
};