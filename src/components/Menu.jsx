import "../estilos/Menu.css";
import menu from "../assets/iconos/menu.png";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sec-header">
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <h1 className="title-header">infinite cloud</h1>
        <img
          src={menu}
          alt="menu"
          onClick={openMenu}
          className="menu-responsive"
        />

        <div className="buttons-header">
          <button className="btn login">Iniciar Sesion</button>
          <button className="btn register">Registrarse</button>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
