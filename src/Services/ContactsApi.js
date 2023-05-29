import axios from 'axios';

export const getAll = async () => {
    const responce = await axios.get('/api/contacts');
    return responce;
};

export const AddReview = async review => {
    const responce = await axios.post('/api/contacts');
    return responce;
}

