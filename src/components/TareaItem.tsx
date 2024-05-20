import { CiBookmarkCheck } from "react-icons/ci";
import { ActionTypes } from "../reducers/task-reducer";
import { TaskInformation } from "../types";

interface TareaItemProps {
  dispatch: React.Dispatch<ActionTypes>,
  task: TaskInformation
}


const TareaItem = ({ dispatch, task }: TareaItemProps) => {

  return (
    <section className={`tarea-card ${task.done ? "task-done" : ""}`}>

      <div className="check-left">
        <CiBookmarkCheck 
        onClick={() => dispatch({type:"[TODO] Finish Todo",payload:task.id})}
        color="#fff" size={"1.4rem"} />
        <h3>{task.task}</h3>
      </div>

      <button
        onClick={() => dispatch({ type: "[TODO] Remove Todo", payload: task.id })}
        className="delete-button">X</button>
    </section >
  )
}

export default TareaItem