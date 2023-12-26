import "./estilos/App.css"
import Menu from "./components/Menu"
import SeccionPrincipal from "./components/SeccionPrincipal"
import Planes from "./components/Planes"
import CardsDetalles from "./components/CardsDetalles"
import Footer from "./components/Footer"
import { CajasDetalles } from "./components/CajasDetalles"
import { DetalleMundo } from "./components/DetalleMundo"

function App() {
  return (
      <section className='sec-principal'>
        <Menu />
        <SeccionPrincipal />
        <Planes />
        <DetalleMundo />
        <CardsDetalles />
        <CajasDetalles />
        <hr />
        <Footer />
      </section>
    
  )
}

export default App
