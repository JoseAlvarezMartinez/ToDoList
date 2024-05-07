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
        case "FINALIZAR_TAREA":
            const nuevoValor = initialValue.map(value => {
                if(value.id === action.payload.id){
                    return {
                        ...value, done:!action.payload.done
                    }
                }
                return value
            })
            return nuevoValor
        default:
            return initialValue
    }

}