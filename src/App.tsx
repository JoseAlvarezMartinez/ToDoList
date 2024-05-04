import { CiTextAlignLeft } from "react-icons/ci";
import { fechaActual } from "./helpers/fechas";
import "./App.css"

const diaTest = new Date().toLocaleDateString("es-ES", { weekday: "long" })

function App() {
  const [diaNumerico, mes, anio] = fechaActual
  return (
    <main className="main-card">
      <h2 className="dia-h2">{diaTest}</h2>
      <p className="fecha-numerica-p">{mes} {diaNumerico}, {anio}</p>
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />
        <input
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />


      </div>
    </main>
  )
}

export default App
