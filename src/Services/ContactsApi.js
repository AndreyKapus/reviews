import axios from 'axios';

export const getAll = async () => {
        const {responce} = await axios.get('/contacts');
        return responce;
    }


export const addReview = async review => {
    const responce = await axios.post('/api/contacts', review);
    return responce;
}

