/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "userInfo",
    initialState: {
        name: {
            firstName: "Guest",
            middleName: "",
            familyName: ""
        },
        address: {
            area: "",
            city: "",
            country: "",
            other: "",
            zip_code: ""
        },
        birthday: "",
        email: "",
        gender: "",
        password: "",
        phoneNumber: "",
        userId: "",
        userName: "",
        wishList:[{
            product_id: "",
            product_name: "",
            amount: 0,
            pictures: "",
            tickets: {
                normal: 0,
                gold: 0,
                premium: 0
            }
        }],
        tickets: {
            normal: 0,
            gold: 0,
            premium: 0
        },
        points: 0,
    },
    reducers: {
        updateUserInfo: (state, action) => {
            console.log(action.payload);
            state.name.firstName = action.payload.name.first_name;
            state.name.middleName = action.payload.name.middle_name;
            state.name.familyName = action.payload.name.family_name;
            state.address = action.payload.address;
            state.birthday = action.payload.birthday;
            state.email = action.payload.email;
            state.entryList = action.payload.entryList;
            state.gender = action.payload.gender;
            state.password = action.payload.password;
            state.phoneNumber = action.payload.phoneNumber;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.wishList = action.payload.wishList;
            state.winningList = action.payload.winningList;
            state.tickets = action.payload.tickets;
            state.points = action.payload.points;
            state.bookmarks = action.payload.bookmarks;
        }
    }
});

export const {updateUserInfo} = slice.actions;

export default slice.reducer;