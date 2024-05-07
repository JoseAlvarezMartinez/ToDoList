import { useReducer, useRef, useEffect } from "react";
import { toDoReducer } from "../reducers/todo-reducer";
import { fechaActual } from "../helpers/fechas";

const diaTest = new Date().toLocaleDateString("es-ES", { weekday: "long" })

const generarID = () => new Date().getTime() * 10

export const useTask = () => {
    const [diaNumerico, mes, anio] = fechaActual;
    const [state, dispatch] = useReducer(toDoReducer, JSON.parse(localStorage.getItem("tareas")) || [])
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(state))
    }, [state])

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter" && ref.current?.value.trim()) {
            dispatch({ type: "AGREGAR_TAREA", payload: { descripcion: ref.current.value.trim(), id: generarID(), done:false } })
            ref.current.value = ""
        }
    }
    return {
        diaTest,
        mes,
        diaNumerico,
        anio,
        state,
        dispatch,
        ref,
        handleSubmit
    }
}