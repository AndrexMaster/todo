import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CardsSliceState} from '@Types/Redux';
import {CardInterface} from "@Types/Cards";

const cards: CardInterface[] = [
    {
        id: 0,
        title: 'initialState title',
        description: 'initialState Description',
        categoryId: 0,
        tasks: [
            {
                id: 0,
                cardId: 0,
                projectId: 0,
                title: 'initialState task title',
                description: 'initialState task description',
            },
            {
                id: 1,
                cardId: 1,
                projectId: 1,
                title: 'initialState task title',
                description: 'initialState task description',
            },
            {
                id: 2,
                cardId: 2,
                projectId: 2,
                title: 'initialState task title',
                description: 'initialState task description',
            },
            {
                id: 3,
                cardId: 3,
                projectId: 3,
                title: 'initialState task title',
                description: 'initialState task description',
            },
        ]
    },
    {
        id: 1,
        title: 'initialState title',
        description: 'initialState Description',
        categoryId: 0,
        tasks: []
    },
    {
        id: 2,
        title: 'initialState title',
        description: 'initialState Description',
        categoryId: 0,
        tasks: []
    },
];


const initialState: CardsSliceState = {
    cardList: cards,
    currentCard: {
        id: 0,
        title: 'initialState title',
        description: 'initialState Description',
        tasks: []
    }
};

const CardsSlice = createSlice({
    name: 'CardsSlice',
    initialState,
    reducers: {
        setTodoViewVariant(state, action: PayloadAction<CardInterface[]>) {
            state.cardList = action.payload
        }
    },
});

export const {} = CardsSlice.actions;
export default CardsSlice.reducer;
