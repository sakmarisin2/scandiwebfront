import axios from 'axios';

export const massDelete = async (ids) => {
    if (ids.length === 0) {
        return;
    }

    try {
        await axios.delete(import.meta.env.VITE_URL_API, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                products: ids,
            },
        });
    } catch (error) {
        throw error;
    }
}