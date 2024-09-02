import axios from 'axios';

export const getProducts = async () =>{
    try {
        const response = await axios.get("http://localhost:80/products");
        return response.data;
    } catch (error) {
        throw error;
    }
}