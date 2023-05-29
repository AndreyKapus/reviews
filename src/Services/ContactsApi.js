import axios from 'axios';

export const getAll = async () => {
    const responce = await axios.get('/api/contacts');
    return responce;
}

