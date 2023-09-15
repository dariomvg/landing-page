import React from "react";
import "../estilos/Cards.css";
import Plan from "./Plan";
import image1 from "../assets/imagenes/image1.svg";
import image2 from "../assets/imagenes/image2.svg";
import image3 from "../assets/imagenes/image3.svg";

const Cards = () => {
  return (
    <div className="cards">
      <Plan>
        <section className="section-card">
          <div className="card-info">
            <h2 className="card-title">Tus archivos en un solo lugar</h2>
            <p className="card-description">
              Ingresa a tus archivos, revísalos, cambíalos, elimínalos, agréga
              nuevos y más... desde un solo lugar!. <b>CloudHarbor</b> ordena y
              guarda tus archivos según tus preferencias pero en una sola base,
              acelerando tu trabájo y productividad.
            </p>
          </div>
          <img className="card-img" loading="lazy" src={image1} width={350} alt="imagen de archivos" />
        </section>
      </Plan>

      <Plan>
        <section className="section-card">
          <img className="card-img" loading="lazy" src={image2} width={350} alt="imagen de trabajo en equipo" />
          <div className="card-info">
            <h2 className="card-title">Trabajo en equipo</h2>
            <p className="card-description">
              El uso de <b>CloudHarbor</b> facilíta el trabajo en equipo,
              haciendolo mucho más rapido y sin tener que entrar de diversas
              cuentas. Podrás entrar a tu base de datos desde cualquier
              dispositivo sin ninguna molestia y a una muy rapida velocidad.
            </p>
          </div>
        </section>
      </Plan>

      <Plan>
        <section className="section-card">
          <div className="card-info">
            <h2 className="card-title">Múltiples funcionalidades</h2>
            <p className="card-description">
                Sincroniza tus datos a la velocidad de la luz, más de 2TB de
                almacenamiento para tí y puedes guardar más de 200 tipos de archivos
                en un solo lugar.  
            </p>
          </div>
          <img className="card-img" loading="lazy" src={image3} width={350} alt="imagen de base de datos" />
        </section>
      </Plan>
    </div>
  );
};

export default Cards;
