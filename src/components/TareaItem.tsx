import type { ToDoInterface } from "../types"
import type { ActionInterface } from "../reducers/todo-reducer"
import { Dispatch } from "react"
interface TareaItemProp {
  tarea: ToDoInterface,
  dispatch: Dispatch<ActionInterface>
}

const TareaItem = ({ tarea, dispatch }: TareaItemProp) => {
  const { id, descripcion, done } = tarea
  return (
    <section className={`tarea-card ${done ? "lista" : ""}`}>
      <h3>{descripcion}</h3>

      <button
        onClick={() => dispatch({ type: "FINALIZAR_TAREA", payload: { descripcion, id, done } })}
      >Finalizada</button>

      <button
        onClick={() => dispatch({ type: "ELIMINAR_TAREA", payload: { id } })}
        className="delete-button">X</button>
    </section >
  )
}

export default TareaItem