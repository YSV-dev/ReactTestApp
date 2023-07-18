import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ITextState {
    text: string
}

const initialState: ITextState = {
    text: ''
}

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        change(state: ITextState, action: PayloadAction<string>) {
            state.text = action.payload;
        }
    }
})

export default textSlice.reducer