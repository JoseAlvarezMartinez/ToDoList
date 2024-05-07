import { CiTextAlignLeft } from "react-icons/ci";
import { fechaActual } from "./helpers/fechas";
import { useRef, useReducer, useEffect } from "react";
import { toDoReducer } from "./reducers/todo-reducer";
import TareaItem from "./components/TareaItem";
import type { ToDoInterface } from "./types";
import "./App.css"

const diaTest = new Date().toLocaleDateString("es-ES", { weekday: "long" })

const generarID = () => new Date().getTime() * 10

function App() {

  const [diaNumerico, mes, anio] = fechaActual;
  const [state, dispatch] = useReducer(toDoReducer, JSON.parse(localStorage.getItem("tareas")) || [])
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state))
  }, [state])

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && ref.current?.value.trim()) {
      dispatch({ type: "AGREGAR_TAREA", payload: { descripcion: ref.current.value.trim(), id: generarID() } })
      ref.current.value = ""
    }
  }

  return (
    <main className="main-card">
      <h2 className="dia-h2">{diaTest}</h2>
      <p className="fecha-numerica-p">{mes} {diaNumerico}, {anio}</p>
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />
        <input
          ref={ref}
          onKeyDown={handleSubmit}
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />
      </div>

      {state.map(tarea => <TareaItem key={tarea.id} tarea={tarea} dispatch={dispatch} />)}
    </main >
  )
}

export default App
