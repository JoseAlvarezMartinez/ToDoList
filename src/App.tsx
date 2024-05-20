import { CiTextAlignLeft } from "react-icons/ci";
import { v4 as uuidv4 } from 'uuid';
import { useState, KeyboardEvent, useReducer, ChangeEvent, useEffect } from "react";
import { initialState, taskReducer } from "./reducers/task-reducer";
import { TaskInformation } from "./types";
import TareaItem from "./components/TareaItem";
import "./App.css"


const initialTask = {
  id: undefined,
  task: "",
  done: false
}

function App() {



  const [state, dispatch] = useReducer(taskReducer, initialState)
  const [task, setTask] = useState<TaskInformation>(initialTask);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, task: e.target.value })
  }

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch({ type: "[TODO] Add Todo", payload: { ...task, id: uuidv4() } })
    }
  }
  return (
    <main className="main-card">
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />
        <input
          value={task.task}
          onKeyDown={handleSubmit}
          onChange={handleChange}
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />
      </div>

      {state.map(task => <TareaItem key={task.id} dispatch={dispatch} task={task} />)}
    </main >
  )
}

export default App
