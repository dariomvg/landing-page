import "../estilos/SeccionPrincipal.css";
import video from "../assets/images/video.gif";

const SeccionPrincipal = () => {
  return (
    <section className="sec-main">
      <div className="seccion1">
        <h1 className="title-main">
          Almacena tus datos de forma segura con infinite cloud
        </h1>
        <p className="description">
          Con <b>Infinite cloud</b> centraliza, Colabora, y Protege: Tu
          Almacenamiento en la Nube para Simplificar, Potenciar y Segurar tus
          Archivos Digitales.
        </p>
        <div className="cont-input">
          <input
            type="email"
            required
            placeholder="Correo electrónico"
            className="input-main"
          />
          <button className="button-obtener">Prueba gratis</button>
        </div>
      </div>
      <img className="image" width={400} src={video} alt="image" />
    </section>
  );
};

export default SeccionPrincipal;
