import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./AuthOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogedIn: false,
    vaiting: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled] (state, {payload}) {
            state.vaiting = true;
            state.isLogedIn = false;
        },

        [authOperations.login.fulfilled] (state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLogedIn = true;
            state.vaiting = false;
        }
    }
});

export default authSlice.reducer