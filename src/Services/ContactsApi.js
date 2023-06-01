import axios from 'axios';

export const getAll = async () => {
        try{
            const responce = await axios.get('/api/contacts');
            return responce;
        } catch (error) {
            return error.message
        }
    }


export const addReview = async review => {
    const responce = await axios.post('/api/contacts', review);
    return responce;
}

