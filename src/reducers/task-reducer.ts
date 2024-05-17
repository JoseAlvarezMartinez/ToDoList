import type { TaskInfo } from "../types"

export type ActionTypes =
    | { type: "add-task", payload: TaskInfo }
    | {type:"delete-task",payload: TaskInfo["taskID"]}

type InitialStateType = {
    tasks: TaskInfo[],
    taskID: TaskInfo["taskID"]
}

export const initialState = {
    tasks: [],
    taskID: ""
}

export const TaskReducer = (state: InitialStateType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "add-task":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "delete-task":
            const newState = state.tasks.filter(task => task.taskID !== action.payload)
            return {
                ...state,
                tasks:newState
            }
    }

}