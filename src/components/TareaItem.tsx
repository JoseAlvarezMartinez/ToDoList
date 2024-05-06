import type { PayLoadInterface } from "../types"
interface TareaItemProp {
    tarea: PayLoadInterface
}

const TareaItem = ({ tarea }: TareaItemProp) => {
    return (
        <section className="tarea-card">
            <h2>{tarea.tareaNueva}</h2>
        </section>
    )
}

export default TareaItem