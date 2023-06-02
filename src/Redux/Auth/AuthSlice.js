import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./AuthOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isFetchingCurrent: false,
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
            state.isLoggedIn = true;
        },

        [authOperations.logout.fulfilled] (state, {payload}) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        },

        [authOperations.fetchCurrentUser.pending] (state) {
            state.isFetchingCurrent = true;
        },

        [authOperations.fetchCurrentUser.fulfilled] (state, {payload}) {
            state.user = {...payload};
            state.isLoggedIn = true;
            state.isFetchingCurrent = false;
        },

        [authOperations.fetchCurrentUser.rejected] (state) {
            state.isFetchingCurrent = false;
        }
    }
});

export default authSlice.reducer