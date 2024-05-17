import { ActionTypes } from "../reducers/task-reducer"
import { TaskInfo } from "../types"

interface TareaItemProps {
  dispatch: React.Dispatch<ActionTypes>,
  task: TaskInfo
}

const TareaItem = ({ dispatch, task: { taskName, taskID } }: TareaItemProps) => {

  return (
    <section className={`tarea-card`}>
      <h3>{taskName}</h3>

      <button
      onClick={() => dispatch({type:"delete-task",payload:taskID})}
      className="delete-button">X</button>
    </section >
  )
}

export default TareaItem