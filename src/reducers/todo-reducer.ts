import type { ToDoInterface } from "../types"

export interface ActionInterface {
    type: string,
    payload: ToDoInterface
}

export const toDoReducer = (initialValue: ToDoInterface[], action: ActionInterface) => {

    switch (action.type) {
        case "AGREGAR_TAREA":
            return [...initialValue, action.payload]
        case "ELIMINAR_TAREA":
            return initialValue.filter(value => value.id !== action.payload.id)
        default:
            return initialValue
    }

}