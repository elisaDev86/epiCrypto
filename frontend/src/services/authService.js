import axios from 'axios';

const API_URL = 'http://localhost:5002/api/auth/register';

// Funzione per gestire la registrazione dell'utente
export const registerUser = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        throw new Error('Errore durante la registrazione. Riprova.');
    }
};

