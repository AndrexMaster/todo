import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProjectsSliceState} from '@Types/Redux';

const initialState: ProjectsSliceState = {
    todoViewVariant: 'KANBAN',
};

const ProjectsSlice = createSlice({
    name: 'ProjectsSlice',
    initialState,
    reducers: {
        setTodoViewVariant(state, action: PayloadAction<'KANBAN' | 'LIST'>) {
            state.todoViewVariant = action.payload
        }
    },
});

export const {} = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
