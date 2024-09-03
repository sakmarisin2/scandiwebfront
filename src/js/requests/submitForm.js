import axios from 'axios';

export const submitForm = async (formData) => {
    try {
        const response = await axios.post(import.meta.env.VITE_URL_API, formData);
        console.log("submitted from :" + import.meta.env.VITE_URL_API)
        return response.data;
    } catch (error) {
        throw error; 
    }
};
