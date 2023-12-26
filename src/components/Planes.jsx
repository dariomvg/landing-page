import Plan from "./Plan";
import corona from "../assets/iconos/corona.png";
import iconFlecha from "../assets/iconos/icon-flecha.png";
import "../estilos/Planes.css";

const Planes = () => {
  return (
    <section className="section-cards">
      <Plan>
        <div className="plan">
          <h3 className="title-card">Plan Personal</h3>
          <div className="prices">
            <span className="former-price">$100USD</span>
            <strong className="price-now">$20USD</strong>
          </div>
          <ul className="list">
            <li className="list-li">Hasta 10GB de almacenamiento en la nube</li>
            <li className="list-li">Sin soporte</li>
            <li className="list-li">Accedé hasta 3 dispositivos diferentes</li>
            <li className="list-li">Solo almacenamiento para imagenes</li>
          </ul>
          <div className="buttons-planes">
            <button className="button">
              Probar versión Grátis
              <img src={iconFlecha} alt="" />
            </button>

            <button className="button">
              Probar versión de pago
              <img src={iconFlecha} alt="" />
            </button>
          </div>
        </div>
      </Plan>

      <Plan>
        <div className="plan activated">
          <div className="recomendated">
            <p className="title-recomendated">Recomendado</p>
            <img
              src={corona}
              className="icon-recomendated"
              alt="imagen de corona"
            />
          </div>
          <h3 className="title-card">Plan Grupal</h3>
          <div className="prices">
            <span className="former-price">$150USD</span>
            <strong className="price-now">$100USD</strong>
          </div>
          <ul className="list">
            <li className="list-li">Hasta 100GB de almacenamiento</li>
            <li className="list-li">Con soporte 24Hs</li>
            <li className="list-li">
              Accedé de múltiples dispositivos diferentes
            </li>
            <li className="list-li">
              Soporte para cualquier tipo de formato. png,jpg,mp4.etc...
            </li>
          </ul>

          <div className="buttons-planes">
            <button className="button">
              Probar versión Grátis
              <img src={iconFlecha} alt="" />
            </button>
            <button className="button">
              Probar versión de pago
              <img src={iconFlecha} alt="" />
            </button>
          </div>
        </div>
      </Plan>

      <Plan>
        <div className="plan">
          <h3 className="title-card">Plan para empresas</h3>
          <div className="prices">
            <span className="former-price">$1500USD</span>
            <strong className="price-now">$1000USD</strong>
          </div>

          <ul className="list">
            <li className="list-li">Más de 1TB de almacenamiento</li>
            <li className="list-li">Con soporte cuando se solicite</li>
            <li className="list-li">Con acceso Ilimitado</li>
            <li className="list-li">Con multiples bases de datos</li>
            <li className="list-li">y más...</li>
          </ul>
          <div className="buttons-planes">
            <button className="button">
              Probar versión Grátis
              <img src={iconFlecha} alt="" />
            </button>
            <button className="button">
              Probar versión de pago
              <img src={iconFlecha} alt="" />
            </button>
          </div>
        </div>
      </Plan>
    </section>
  );
};

export default Planes;
