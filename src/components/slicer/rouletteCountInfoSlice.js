/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "rouletteCountInfo",
    initialState: {value: 0},
    reducers: {
        updateRouletteCount: (state, action) => {
            console.log(action.payload);
            state.value = action.payload.value
        }
    }
});

export const {updateRouletteCount} = slice.actions;

export default slice.reducer;