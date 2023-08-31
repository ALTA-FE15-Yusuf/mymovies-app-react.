import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item{
    id:number;
    title:string;
    image:string;
}

export interface Bookstate{
    items:Item[]
}

const initialState:Bookstate={
    items:[]
}

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        }
    }
})

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer