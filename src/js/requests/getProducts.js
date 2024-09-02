import axios from 'axios';

export const getProducts = async () =>{
    try {
        const response = await axios.get(import.meta.env.VITE_URL_API);
        return response.data;
    } catch (error) {
        throw error;
    }
}