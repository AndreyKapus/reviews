import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://review-api-h3du.onrender.com";

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/api/auth/register', credentials)
        return data
    } catch (error) {

    }
});

