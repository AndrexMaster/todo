// src/store/index.ts
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import appReducer from '@Store/App/AppReducer';
import cardsReducer from "@Store/Cards/CardsReducer";
import userReducer from "@Store/User/UserReducer";
import projectsReducer from "@Store/Projects/ProjectsReducer";

export const store = configureStore({
    reducer: {
        app: appReducer,
        cards: cardsReducer,
        user: userReducer,
        projects: projectsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
