import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IColorState {
    color: string
}

const initialState: IColorState = {
    color: 'white'
}

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        change(state: IColorState, action: PayloadAction<string>) {
            state.color = action.payload;
        }
    }
})

export default colorSlice.reducer