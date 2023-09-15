import React from "react";
import "../estilos/Footer.css";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p className="title-footer">síguenos en nuestras redes sociales!!</p>
        <div className="list-icons">
          <div className="cont-icons">
            <img className="icon-footer" src={facebook} alt="" />
            <span className="title-icon">Facebook</span>
          </div>
          <div className="cont-icons">
            <img className="icon-footer" src={instagram} alt="" />
            <span className="title-icon">Instagram</span>
          </div>

          <div className="cont-icons">
            <img className="icon-footer" src={twitter} alt="" />
            <span className="title-icon">TwitterX</span>
          </div>
        </div>
        <ul className="list-tags">
          <li className="tags-footer">Contacto</li>
          <span>|</span>
          <li className="tags-footer">Sobre nosotros</li>
          <span>|</span>
          <li className="tags-footer">Política de privacidad</li>
          <span>|</span>
          <li className="tags-footer">Documentación</li>
        </ul>
        <h4 className="title-copy">©2023 CloudHarbor</h4>
      </footer>
    </div>
  );
};

export default Footer;
