import {configureStore} from "@reduxjs/toolkit"
import modeSlice from "./features/modeSlice"
import { bookSlice } from "./features/modeBookmark"

const store = configureStore({
    reducer: {
        mode: modeSlice,
        book : bookSlice.reducer
    }
})

export default store