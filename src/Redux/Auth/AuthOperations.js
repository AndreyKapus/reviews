import { createAsyncThunk } from '@reduxjs/toolkit';
// import token from '../../Services/token'
import axios from 'axios';

axios.defaults.baseURL = "https://review-api-h3du.onrender.com";

export const token = { 
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/api/auth/register', credentials)
        token.set(data.token);
        return data;
        } catch (error) {
            return error.message;
    }
});

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await axios.post('/api/auth/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return error.message;
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/api/auth/logout');
        token.unset()
    } catch (error) {
        return error.message;
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async(_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    
    if (persistedToken === null) {
        return thunkApi.rejectWithValue();
    };

    token.set(persistedToken);
    try{
        const {data} = await axios.get('/api/auth/current');
        return data;
    } catch (error) {
        return error.message
    }
})