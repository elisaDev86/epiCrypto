import axios from 'axios';

// Funzione per eliminare l'utente
export const deleteUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.delete('http://localhost:5002/api/auth/me', config);
        return response.data; // Ritorna solo i dati utili, non l'intera response
    } catch (error) {
        throw error.response?.data?.message || error.message; // Più chiaro da gestire nel catch
    }
};

