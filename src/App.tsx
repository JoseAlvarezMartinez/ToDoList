import { CiTextAlignLeft } from "react-icons/ci";
import { fechaActual } from "./helpers/fechas";
import { useState, useReducer } from "react";
import { toDoReducer } from "./reducers/todo-reducer";
import "./App.css"

const diaTest = new Date().toLocaleDateString("es-ES", { weekday: "long" })

const generarID = () => new Date().getTime() * 10

interface PayLoadInterface {
  tareaNueva: string,
  id: number
}

function App() {

  const [diaNumerico, mes, anio] = fechaActual;
  const [tareaNueva, setTareaNueva] = useState("")
  const [state, dispatch] = useReducer(toDoReducer, [])

  const agregarTarea = () => {
    dispatch({ type: "AGREGAR_TAREA", payload: { tareaNueva, id: generarID() } })
    setTareaNueva("")
  }

  return (
    <main className="main-card">
      <h2 className="dia-h2">{diaTest}</h2>
      <p className="fecha-numerica-p">{mes} {diaNumerico}, {anio}</p>
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />

        <input
          onKeyDown={e => e.code === "Enter" && agregarTarea()}
          value={tareaNueva}
          onChange={(e) => setTareaNueva(e.target.value)}
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />
      </div>

      {state.map(tarea => <h2 key={tarea.id}>{tarea.tareaNueva}</h2>)}
    </main >
  )
}

export default App
