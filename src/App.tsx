import { CiTextAlignLeft } from "react-icons/ci";
import "./App.css"

const dia = new Date().toLocaleDateString("es-es", { weekday: "long" })

function App() {

  return (
    <main className="main-card">
      <h2 className="dia-h2">{dia}</h2>

      <div className="input-background">
        <CiTextAlignLeft color="#fff" />
        <input className="input-tarea" placeholder="Agregar una tarea" type="text" />
      </div>
    </main>
  )
}

export default App
