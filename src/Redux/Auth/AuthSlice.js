import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./AuthOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled] (state, {payload}) {
            state.isLogedIn = false;
        },

        [authOperations.login.fulfilled] (state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLogedIn = true;
        },

        [authOperations.logout.fulfilled] (state, {payload}) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLogedIn = false;
        }
    }
});

export default authSlice.reducer