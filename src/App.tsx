import { CiTextAlignLeft } from "react-icons/ci";
import { useReducer, KeyboardEvent, useRef } from "react";
import { TaskReducer, initialState } from "./reducers/task-reducer";
import { v4 as uuidv4 } from 'uuid';
import "./App.css"
import TareaItem from "./components/TareaItem";

function App() {

  const [state, dispatch] = useReducer(TaskReducer, initialState);
  const info = useRef(null)

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && info.current?.value !== "") {
      dispatch({ type: "add-task", payload: { taskName: info.current.value, taskID: uuidv4() } })
      info.current.value = ""
    }
  }

  return (
    <main className="main-card">
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />
        <input
          ref={info}
          onKeyDown={handleAdd}
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />
      </div>
      {
        state.tasks.map(task => <TareaItem key={task.taskID} task={task} dispatch={dispatch} />)
      }
    </main >
  )
}

export default App
