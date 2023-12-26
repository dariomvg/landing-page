import "../estilos/CardsDetalles.css";
import imgFiles from "../assets/images/img-files.png";
import imgData from "../assets/images/img-data.png";
import imgGroup from "../assets/images/img-group.png";
import imgSecure from "../assets/images/img-secure.png";
import imgIA from "../assets/images/img-ia.png";
import iconFlecha from "../assets/iconos/icon-flecha.png";

const CardsDetalles = () => {
  return (
    <section className="cards">
      <div className="section-card">
        <div className="card-info">
          <h2 className="card-title">Almacenamiento Centralizado</h2>
          <p className="card-description">
            Simplificamos tu vida digital al proporcionarte un espacio de
            almacenamiento en la nube donde puedes guardar, organizar y acceder
            a tus documentos, fotos y más, de manera fácil y eficiente.
          </p>
          <button className="btn-card">
            Más información
            <img
              src={iconFlecha}
              alt="imagen de flecha"
              className="img-card"
              width={25}
              height={25}
            />
          </button>
        </div>
        <img
          className="card-img"
          loading="lazy"
          src={imgFiles}
          width={350}
          height={350}
          alt="imagen de archivos"
        />
      </div>

      <div className="section-card">
        <img
          className="card-img"
          loading="lazy"
          src={imgGroup}
          width={350}
          height={350}
          alt="imagen de trabajo en equipo"
        />
        <div className="card-info">
          <h2 className="card-title">Trabajo en Equipo Optimizado</h2>
          <p className="card-description">
            Nuestra plataforma en la nube posibilita la edición colaborativa en
            tiempo real, sin importar la ubicación geográfica de tus compañeros
            de trabajo. Mejora la productividad y la sinergia entre equipos con
            herramientas diseñadas para una colaboración fluida.
          </p>
          <button className="btn-card">
            Más información
            <img
              src={iconFlecha}
              alt="imagen de flecha"
              className="img-card"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>

      <div className="section-card">
        <div className="card-info">
          <h2 className="card-title">Múltiples Funcionalidades Intuitivas</h2>
          <p className="card-description">
            Ofrecemos una gama de funcionalidades intuitivas que simplifican tu
            experiencia digital. Desde la organización eficiente de archivos
            hasta la edición y compartición fácil, nuestras herramientas están
            diseñadas para adaptarse a tus necesidades, mejorando tu eficiencia
            y maximizando tu tiempo.
          </p>
          <button className="btn-card">
            Más información
            <img
              src={iconFlecha}
              alt="imagen de flecha"
              className="img-card"
              width={25}
              height={25}
            />
          </button>
        </div>
        <img
          className="card-img"
          loading="lazy"
          src={imgData}
          width={350}
          alt="imagen de base de datos"
        />
      </div>
      <div className="section-card">
        <img
          className="card-img"
          loading="lazy"
          src={imgSecure}
          width={350}
          height={350}
          alt="imagen de trabajo en equipo"
        />
        <div className="card-info">
          <h2 className="card-title"> Seguridad de Datos Avanzada</h2>
          <p className="card-description">
            Utilizamos las últimas tecnologías de cifrado para garantizar la
            privacidad y la integridad de tus datos. Nuestra plataforma está
            respaldada por medidas de seguridad avanzadas y sistemas de
            inteligencia artificial que aprenden y se adaptan para protegerte
            contra amenazas digitales, brindándote tranquilidad en cada
            transferencia y almacenamiento.
          </p>
          <button className="btn-card">
            Más información
            <img
              src={iconFlecha}
              alt="imagen de flecha"
              className="img-card"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
      <div className="section-card">
        <div className="card-info">
          <h2 className="card-title">Inteligencia Artificial Integrada</h2>
          <p className="card-description">
            Desde la personalización de recomendaciones hasta la optimización de
            la seguridad, nuestra IA trabaja en segundo plano para hacer que tu
            experiencia sea más inteligente y adaptada a tus necesidades
            individuales, proporcionando una solución de almacenamiento en la
            nube verdaderamente avanzada.
          </p>
          <button className="btn-card">
            Más información
            <img
              src={iconFlecha}
              alt="imagen de flecha"
              className="img-card"
              width={25}
              height={25}
            />
          </button>
        </div>
        <img
          className="card-img"
          loading="lazy"
          src={imgIA}
          width={350}
          height={350}
          alt="imagen de base de datos"
        />
      </div>
    </section>
  );
};

export default CardsDetalles;
