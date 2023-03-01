import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const watermarkImageThunk = createAsyncThunk("WaterMarkImage", async (payload) => {
    const formData = new FormData()
    for (let key in payload) {
        formData.append(key, payload[key])

    }
    const response = await fetch("https://water-marker-api.onrender.com/upload", {
        body: formData,
        method: "POST",

    })
    return (await response.json())["url"]

})

const WaterMarkSlice = createSlice({
    initialState: {
        loading: false,
        error: false,
        image: "",
        displayMyProfile: false
    },
    name: "WaterMarkSlice",
    reducers: {
        displayMyProfile(state, action) {
            state.displayMyProfile = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(watermarkImageThunk.fulfilled, (state, action) => {
            state.image = action.payload;
            state.loading = false;
            state.error = false
        });
        builder.addCase(watermarkImageThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(watermarkImageThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = true
        })
    }
})
export default WaterMarkSlice.reducer
export const { displayMyProfile } = WaterMarkSlice.actions