import { configureStore } from "@reduxjs/toolkit"
import incdecReducer from "./Reducer/Index"

export default configureStore({
    reducer: {
        counting:incdecReducer
    }
})