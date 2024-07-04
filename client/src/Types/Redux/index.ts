import {CardInterface, CurrentCardInterface} from "@Types/Cards";
import {UserInterface} from "@Types/User";

export interface AppSliceState {
    todoViewVariant: 'KANBAN' | 'LIST',
}

export interface CardsSliceState {
    cardList: CardInterface[]
    currentCard : CurrentCardInterface
}

export interface UserSliceState {
    user: UserInterface;
}

export interface ProjectsSliceState {
    todoViewVariant: 'KANBAN' | 'LIST',
}