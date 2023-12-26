import imgEarth from "../assets/images/image-earth.png";
import "../estilos/DetalleMundo.css";

export const DetalleMundo = () => {
  return (
    <section className="section-mundo">
      <img
        src={imgEarth}
        alt="imagen de la tierra"
        className="img-mundo"
        width={400}
        height={400}
      />
      <section className="caja-info">
        <h1 className="title-info">
          Descubre por qué millones de desarrolladores eligen{" "}
          <b className="b-title">Infinite cloud</b> para almacenar sus datos de su
          negocio, desde el primer paso hasta una red completa.
        </h1>
        <section className="caja-detalles">
          <div className="cajas">
            <div className="caja">
              <h3>Millones</h3>
              <p>de desarrolladores en el mundo</p>
            </div>
            <div className="caja">
              <h3>Miles</h3>
              <p>de empresas en el mundo</p>
            </div>
          </div>
          <div className="cajas">
            <div className="caja">
              <h3>Nº1</h3>
              <p>en países líderes como EE.UU, Suiza, Inglaterra, etc.</p>
            </div>
            <div className="caja">
              <h3>180+</h3>
              <p>países representados</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
