import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IToDo } from "../../models/IToDo"


interface IToDoState {
    todos: IToDo[],
    lastId: number
}

const initialState: IToDoState = {
    todos: [],
    lastId: 0
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add(state: IToDoState, action: PayloadAction<string>) {
            const todo: IToDo = {
                id: state.lastId,
                text: action.payload,
                selected: false
            };
            state.lastId += 1;
            state.todos.push(todo);
        },
        edit(state: IToDoState, action: PayloadAction<{id: number, text: string}>) {
            const index = state.todos.findIndex(obj => obj.id === action.payload.id);

            if (index !== -1) {
                state.todos[index].text = action.payload.text;
            }
        },
        setStatus(state: IToDoState, action: PayloadAction<{id: number, selected: boolean}>){
            const index = state.todos.findIndex(obj => obj.id === action.payload.id);

            if (index !== -1) {
                state.todos[index].selected = action.payload.selected;
            }
        },
        remove(state: IToDoState, action: PayloadAction<number>) {
            const index = state.todos.findIndex(obj => obj.id === action.payload);

            console.log(action.payload);

            if (index !== -1) {
                state.todos.splice(index, 1);
            }
        }
    }
})

export default todoSlice.reducer