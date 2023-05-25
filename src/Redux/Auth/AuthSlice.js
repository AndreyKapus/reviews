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

        }
    }
});

export default authSlice.reducer