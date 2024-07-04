import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserSliceState} from '@Types/Redux';

const initialState: UserSliceState = {
    todoViewVariant: 'KANBAN',
};

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        setTodoViewVariant(state, action: PayloadAction<'KANBAN' | 'LIST'>) {
            state.todoViewVariant = action.payload
        }
    },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
