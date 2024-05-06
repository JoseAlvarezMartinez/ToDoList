import type { PayLoadInterface } from "../types"
interface TareaItemProp {
    tarea: PayLoadInterface
}

const TareaItem = ({ tarea }: TareaItemProp) => {
    console.log(tarea)
    return (
        <div>TareaItem</div>
    )
}

export default TareaItem