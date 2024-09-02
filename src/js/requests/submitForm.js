import axios from 'axios';

export const submitForm = async (formData) => {
    try {
        const response = await axios.post(import.meta.env.VITE_URL_API, formData);
        return response.data;
    } catch (error) {
        throw error; 
    }
};
