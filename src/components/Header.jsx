import "../estilos/Header.css";
import menu from "../assets/icons/menu.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen); 
  }

  return (
    <div>
      <header className="sec-header">
        <nav className="nav">
          <h1 className="title-header">CloudHarbor</h1>
          <img
            src={menu}
            alt="menu"
            onClick={openMenu}
            className="menu-responsive"
          />
          <div className={`buttons-header ${isOpen ? "active" : ""}`}  >
            <button className="btn">Obtener Aplicacion</button>
            <button className="btn">Iniciar Sesion</button>
            <button className="btn register">Registrarse</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
