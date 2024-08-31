import axios from 'axios';

export const submitForm = async (formData) => {
    try {
        const response = await axios.post('http://localhost:80/products', formData);
        console.log('Product added:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error; 
    }
};
