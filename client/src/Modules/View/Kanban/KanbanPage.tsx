import {useAppSelector} from "@Store/hooks";
import {RootState} from "@Store/store";
import {Card} from "@Modules/View/Kanban/UI/Card";

export const KanbanPage = () => {
    const cards = useAppSelector((state: RootState) => state.cards.cardList)

    if (cards.length <= 0) {
        return (
            <div>
                нету ни одной карточки
            </div>
        )
    }

    return (
        <div className={'flex flex-row items-start gap-20 p-10 overflow-auto h-full box-border'}>
            {cards?.map((card, index) => (
                <Card key={index} card={card}/>
            ))}
        </div>
    )
}