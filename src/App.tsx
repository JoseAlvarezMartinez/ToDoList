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
  const [state, dispatch] = useReducer(toDoReducer, [])
  const ref = useRef<HTMLInputElement>(null)

  return (
    <main className="main-card">
      <h2 className="dia-h2">{diaTest}</h2>
      <p className="fecha-numerica-p">{mes} {diaNumerico}, {anio}</p>
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />

        <input
          ref={ref}
          onKeyDown={e => {
            if (e.code === "Enter" && ref.current && ref.current.value.trim() !== "") {
              dispatch({ type: "AGREGAR_TAREA", payload: { tareaNueva: ref.current.value.trim(), id: generarID() } })
              ref.current.value = ""
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
