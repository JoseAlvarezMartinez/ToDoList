import type { PayLoadInterface } from "../types"

interface toDoReducerInterface {
    type: string,
    payload: PayLoadInterface
}

export const toDoReducer = (initialState: PayLoadInterface[], action: toDoReducerInterface) => {
    switch (action.type) {
        case "AGREGAR_TAREA":
            return [...initialState, action.payload]
        default:
            return initialState
    }
}