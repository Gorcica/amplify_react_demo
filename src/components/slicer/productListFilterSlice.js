/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "productListFilter",
    initialState: {
        newOrUsed: 'all',
        selectedCategories: []
    },
    reducers: {
        updateNewOrUsed: (state, action) => {
            console.log(action.payload);
            state.newOrUsed = action.payload.newOrUsed;
        },
        updateSelectedCategories: (state, action) => {
            console.log(action.payload);
            state.selectedCategories = action.payload.selectedCategories;
        }
    }
});

export const {updateNewOrUsed, updateSelectedCategories} = slice.actions;

export default slice.reducer;