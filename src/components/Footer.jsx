import instagram from "../assets/iconos/icon-instagram.png";
import facebook from "../assets/iconos/icon-facebook.png";
import twitter from "../assets/iconos/icon-twitter.png";
import linkedin from "../assets/iconos/icon-linkedin.png";
import youtube from "../assets/iconos/icon-youtube.png";
import "../estilos/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="list-tags">
        <div className="tags">
          <p className="tags-footer">Política de privacidad</p>
          <span>|</span>
          <p className="tags-footer">Términos y Condiciones</p>
        </div>
        <div className="list-icons">
          <img
            className="icon-footer"
            src={facebook}
            alt="imagen facebook"
            width={30}
            height={30}
            title="Facebook"
          />
          <img
            className="icon-footer"
            src={instagram}
            alt="imagen instagram"
            width={30}
            height={30}
            title="Instagram"
          />
          <img
            className="icon-footer"
            src={twitter}
            alt="imagen twitter"
            width={30}
            height={30}
            title="X - Twitter"
          />
          <img
            className="icon-footer"
            src={linkedin}
            alt="imagen linkedin"
            width={30}
            height={30}
            title="linkedin"
          />
          <img
            className="icon-footer"
            src={youtube}
            alt="imagen youtube"
            width={30}
            height={30}
            title="Youtube"
          />
        </div>
      </div>
      <h4 className="title-copyright">©2023 Infinite cloud</h4>
    </footer>
  );
};

export default Footer;
