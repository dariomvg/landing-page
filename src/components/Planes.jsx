import React from "react";
import Plan from "./Plan";
import "../estilos/Planes.css";
import corona from "../assets/icons/corona.png";

const Planes = () => {
  return (
    <div className="sec-planes">
      <h1 className="title-planes">Planes para usuarios</h1>
      <section className="section-cards">
        <Plan>
          <div className="plan">
            <h3 className="title-card">Plan para 1 usuario</h3>
            <div className="prices">
              <span className="former-price">$100USD</span>
              <strong className="price-now">$20USD</strong>
            </div>
            <ul className="list">
              <li className="list-li">Hasta 10GB de almacenamiento</li>
              <li className="list-li">Sin soporte</li>
              <li className="list-li">
                Accedé hasta 3 dispositivos diferentes
              </li>
            </ul>
            <div className="buttons-planes">
              <button className="button free">Probar versión Grátis 🡲</button>
              <button className="button premium">Obtener plan Premium 🡲</button>
            </div>
          </div>
        </Plan>

        <Plan>
          <div className="plan activated">
            <div className="recomendated">
              <strong className="title-recomendated">Recomendado</strong>
              <img
                src={corona}
                className="icon-recomendated"
                alt="imagen de corona"
              />
            </div>
            <h3 className="title-card">Plan para más usuarios</h3>
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
            </ul>

            <div className="buttons-planes">
              <button className="button free">Probar versión Grátis 🡲</button>
              <button className="button premium">Obtener plan Premium 🡲</button>
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
              <li className="list-li">
                Con base de datos para recuperar archivos borrados
              </li>
              <li className="list-li">y más...</li>
            </ul>

            <div className="buttons-planes">
              <button className="button free">Probar versión Grátis 🡲</button>
              <button className="button premium">Obtener plan Premium 🡲</button>
            </div>
          </div>
        </Plan>
      </section>
    </div>
  );
};

export default Planes;
