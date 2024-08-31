import axios from 'axios';

export const massDelete = async (ids) => {
    if (ids.length === 0) {
        return;
    }

    try {
        await axios.delete('http://localhost/products', {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                products: ids,
            },
        });
    } catch (error) {
        console.error('Error deleting products:', error);
    }
}