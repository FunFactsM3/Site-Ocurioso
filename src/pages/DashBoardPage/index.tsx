import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const DashBoardPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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