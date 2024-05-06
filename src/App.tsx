import { CiTextAlignLeft } from "react-icons/ci";
import { fechaActual } from "./helpers/fechas";
import { useState, useReducer, useRef } from "react";
import { toDoReducer } from "./reducers/todo-reducer";
import "./App.css"
import TareaItem from "./components/TareaItem";

const diaTest = new Date().toLocaleDateString("es-ES", { weekday: "long" })

const generarID = () => new Date().getTime() * 10

function App() {

  const [diaNumerico, mes, anio] = fechaActual;
  const [tareaNueva, setTareaNueva] = useState("")
  const [state, dispatch] = useReducer(toDoReducer, [])
  const refe = useRef(null)

  return (
    <main className="main-card">
      <h2 className="dia-h2">{diaTest}</h2>
      <p className="fecha-numerica-p">{mes} {diaNumerico}, {anio}</p>
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />

        <input
          ref={refe}
          onKeyDown={e => {
            if (e.code === "Enter") {
              dispatch({ type: "AGREGAR_TAREA", payload: { tareaNueva:refe.current.value, id: generarID() } })
            }
          }}
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />
      </div>

      {state.map(tarea => <TareaItem key={tarea.id} tarea={tarea} />)}
    </main >
  )
}

export default App
