import { combineReducers, configureStore } from "@reduxjs/toolkit"
import todoReducer from "./reducers/ToDoSlice"
import colorReducer from "./reducers/ColorSlice"
import textReducer from "./reducers/TextSlice"
import tableReducer from "./reducers/TableSlice"

const rootReducer = combineReducers({
    todoReducer,
    colorReducer,
    textReducer,
    tableReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']