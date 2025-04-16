import axios from 'axios';

const API_URL = 'http://localhost:5002/api/auth/login';

export const loginUser = async (data) => {
    try {
        const response = await axios.post(API_URL, data);

        // Salva il token in localStorage
        if (response.data && response.data.token) {
            localStorage.setItem('authToken', response.data.token);
        } else {
            console.error('Token non presente nella risposta del server');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

