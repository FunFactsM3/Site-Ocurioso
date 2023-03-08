import React, { useContext } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { ModalContext } from "../../providers/ModalContext";

const DashBoardPage = () => {
  const {menuOpen, setMenuOpen} = useContext(ModalContext);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <Hamburger toggled={menuOpen} />
      </div>
      {menuOpen && (
        <nav className="menu">
          <ul>
            <button>Login</button>
            <button>Cadastro</button>
          </ul>
          <h1>Menu</h1>
        </nav>
      )}
    </div>
  );
};

export default DashBoardPage;