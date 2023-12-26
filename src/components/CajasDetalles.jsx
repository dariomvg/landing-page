import iconAyuda from "../assets/iconos/ayuda.svg";
import iconDocs from "../assets/iconos/docs.svg";
import iconHome from "../assets/iconos/home.svg";
import iconEmpresas from "../assets/iconos/empresas.svg";
import iconLink from "../assets/iconos/link.svg";
import "../estilos/CajasDetalles.css";

export const CajasDetalles = () => {
  return (
    <section className="container-cajas">
      <h1 className="title">Más información sobre infinite cloud</h1>
      <section className="cont-cajas">
        <div className="box">
          <img
            src={iconHome}
            alt="imagen de una casa"
            width={50}
            height={50}
            className="img-box"
          />
          <h1 className="title-box">Sobre nosotros</h1>
          <a href="#" className="link-box">
            Más información{" "}
            <img src={iconLink} alt="imagen link" width={20} height={20} />
          </a>
        </div>
        <div className="box">
          <img
            src={iconEmpresas}
            alt="imagen de empresa"
            width={50}
            height={50}
            className="img-box"
          />
          <h1 className="title-box">Empresas</h1>
          <a href="#" className="link-box">
            Más información{" "}
            <img src={iconLink} alt="imagen link" width={20} height={20} />
          </a>
        </div>
        <div className="box">
          <img
            src={iconDocs}
            alt="imagen de documentos"
            width={50}
            height={50}
            className="img-box"
          />
          <h1 className="title-box">Documentación</h1>
          <a href="#" className="link-box">
            Más información{" "}
            <img src={iconLink} alt="imagen link" width={20} height={20} />
          </a>
        </div>
        <div className="box">
          <img
            src={iconAyuda}
            alt="imagen de ayuda"
            width={50}
            height={50}
            className="img-box"
          />
          <h1 className="title-box">Ayuda</h1>
          <a href="#" className="link-box">
            Más información{" "}
            <img src={iconLink} alt="imagen link" width={20} height={20} />
          </a>
        </div>
      </section>
    </section>
  );
};
