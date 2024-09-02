import axios from 'axios';

export const submitForm = async (formData) => {
    try {
        const response = await axios.post('http://localhost:80/products', formData);
        return response.data;
    } catch (error) {
        throw error; 
    }
};
