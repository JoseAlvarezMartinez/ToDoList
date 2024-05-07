import { CiTextAlignLeft } from "react-icons/ci";
import TareaItem from "./components/TareaItem";
import "./App.css"
import { useTask } from "./hooks/useTask";

function App() {

  const { diaTest,
    ref,
    mes,
    diaNumerico,
    anio,
    state,
    dispatch,
    handleSubmit } = useTask()

  return (
    <main className="main-card">
      <h2 className="dia-h2">{diaTest}</h2>
      <p className="fecha-numerica-p">{mes} {diaNumerico}, {anio}</p>
      <div className="input-background">
        <CiTextAlignLeft color="#fff" />
        <input
          ref={ref}
          onKeyDown={handleSubmit}
          className="input-tarea"
          placeholder="Agregar una tarea"
          type="text" />
      </div>

      {state.map(tarea => <TareaItem key={tarea.id} tarea={tarea} dispatch={dispatch} />)}
    </main >
  )
}

export default App
