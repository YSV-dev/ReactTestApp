import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

interface ITableState {
    products: IProduct[],
    filterBrand: string,
    filterTitle: string
}

const initialState: ITableState = {
    products: [],
    filterBrand: "",
    filterTitle: ""
}

export const tableSlice = createSlice({
            name: "table",
            initialState,
            reducers: {
                setData(state: ITableState, action: PayloadAction<IProduct[]>) {
                    state.products = action.payload;
                },
                setFilterBrand(state: ITableState, action: PayloadAction<string>) {
                    state.filterBrand = action.payload;
                },
                setFilterTitle(state: ITableState, action: PayloadAction<string>) {
                    state.filterTitle = action.payload;
                }
            }
        }); 

export default tableSlice.reducer;