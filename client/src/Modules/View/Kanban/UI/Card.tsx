import {CardInterface} from "@Types/Cards";
import {KanbanListTask} from "@Modules/Tasks/ListPoint/KanbanListTask";

interface CardPropsInterface {
    card: CardInterface
}

export const Card = (props : CardPropsInterface) => {
    const {
        card
    } = props

    return (
        <div className={'flex flex-col rounded-lg shadow-2xl text-white min-h-40 min-w-96'} style={{backgroundColor: '#222'}}>
            <div className={'p-3 px-5 text-2xl capitalize'}>
                {card.title}
            </div>
            <div className={'flex flex-col gap-4 p-2 flex-1'} style={{backgroundColor: '#555'}}>
                {card.tasks.map((task, index) => (
                    <KanbanListTask key={index} task={task}/>
                ))}
            </div>
            <div className={'p-2'}>
                {card.description}
            </div>
        </div>
    )
}