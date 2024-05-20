import type { TaskInformation } from "../types"
export type ActionTypes =
    | { type: "[TODO] Add Todo", payload: TaskInformation }
    | { type: "[TODO] Remove Todo", payload: TaskInformation["id"] }
    | { type: "[TODO] Finish Todo", payload: TaskInformation["id"] }

export const initialState: TaskInformation[] = []

export const taskReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "[TODO] Add Todo":
            return [...state, action.payload]
        case "[TODO] Remove Todo":
            return state.filter(todo => todo.id !== action.payload)
        case "[TODO] Finish Todo":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
    }
}