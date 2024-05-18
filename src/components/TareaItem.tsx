import { ActionTypes } from "../reducers/task-reducer"
import { CiBookmarkCheck } from "react-icons/ci";
import { TaskInfo } from "../types"

interface TareaItemProps {
  dispatch: React.Dispatch<ActionTypes>,
  task: TaskInfo
}

const TareaItem = ({ dispatch, task: { taskName, taskID, done } }: TareaItemProps) => {
  return (
    <section className={`tarea-card ${done ? "task-done" : ""}`}>

      <div className="check-left">
        <CiBookmarkCheck color="#fff" size={"1.4rem"} onClick={() => dispatch({ type: "finish-task", payload: taskID })} />
        <h3>{taskName}</h3>
      </div>

      <button
        onClick={() => dispatch({ type: "delete-task", payload: taskID })}
        className="delete-button">X</button>
    </section >
  )
}

export default TareaItem