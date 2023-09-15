import React from "react";
import "../estilos/Main.css";
import video from "../assets/imagenes/video.gif";

const Main = () => {
  return (
    <div className="sec-main">
      <div className="seccion1">
        <h1 className="title-main">
          Almacena tus datos de forma segura con CloudHarbor
        </h1>
        <p className="description">
          Con <b>CloudHarbor</b> guarda tus datos de forma segura y olvídate de
          las preocupaciones. Tus datos estarán seguros y tú tranquilo.
        </p>
        <button className="button-obtener">Obtener App 🡲</button>
      </div>
      <img className="image" width={400} src={video} alt="image" />
    </div>
  );
};

export default Main;
