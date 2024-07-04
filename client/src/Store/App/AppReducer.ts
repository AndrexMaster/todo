import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppSliceState} from '@Types/Redux';

const initialState: AppSliceState = {
    todoViewVariant: 'KANBAN',
};

const AppSlice = createSlice({
    name: 'AppSlice',
    initialState,
    reducers: {
        setTodoViewVariant(state, action: PayloadAction<'KANBAN' | 'LIST'>) {
            state.todoViewVariant = action.payload
        }
    },
});

export const {} = AppSlice.actions;
export default AppSlice.reducer;
