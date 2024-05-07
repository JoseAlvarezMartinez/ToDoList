import type { ToDoInterface } from "../types"
import type { ActionInterface } from "../reducers/todo-reducer"
import { Dispatch } from "react"
interface TareaItemProp {
  tarea: ToDoInterface,
  dispatch: Dispatch<ActionInterface>
}

const TareaItem = ({ tarea, dispatch }: TareaItemProp) => {
  return (
    <section className="tarea-card">
      <h3>{tarea.descripcion}</h3>

      <button
        onClick={() => dispatch({ type: "ELIMINAR_TAREA", payload: { descripcion: "", id: tarea.id } })}
        className="delete-button">X</button>
    </section >
  )
}

export default TareaItem