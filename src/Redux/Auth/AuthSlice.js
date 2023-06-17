import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./AuthOperations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isFetchingCurrent: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled] (state) {
            state.isLogedIn = false;
        },

        [authOperations.verify.fulfilled] (state) {
            state.isLogedIn = false;
        },

        [authOperations.login.pending] (state) {
            state.isLoading = true;
        },

        [authOperations.login.fulfilled] (state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },

        [authOperations.logout.fulfilled] (state) {
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