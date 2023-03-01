import { configureStore } from "@reduxjs/toolkit";

import waterMarkSlice from "./slices/homeSlice";
const store = configureStore({
    reducer: {
        waterMarker: waterMarkSlice
    }
})
export default store