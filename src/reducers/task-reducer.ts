import type { TaskInfo } from "../types"

export type ActionTypes =
    | { type: "add-task", payload: TaskInfo }
    | { type: "delete-task", payload: TaskInfo["taskID"] }
    | { type: "finish-task", payload: TaskInfo["taskID"] }

type InitialStateType = {
    tasks: TaskInfo[],
    taskID: TaskInfo["taskID"]
}

export const initialState: TaskInfo[] = []

export const TaskReducer = (state: TaskInfo[] = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "add-task":
            return [...state, action.payload]
        case "delete-task":
            return state.filter(todo => todo.taskID !== action.payload)
        case "finish-task":
            return state.map(todo => {
                if (todo.taskID === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
    }

}