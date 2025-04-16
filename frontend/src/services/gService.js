import axios from 'axios';

const API_BASE_URL = 'http://localhost:5002/api/oauth';

/**
 * Avvia il flusso OAuth con Google
 */
export const loginWithGoogle = () => {
    // Reindirizza l'utente verso l'autenticazione Google
    window.location.href = `${API_BASE_URL}/google`;
};

/**
 * Recupera i dati dell'utente dopo il login OAuth (se il backend li restituisce)
 */
export const fetchGoogleUser = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user`, {
            withCredentials: true, // importante se usi cookie di sessione
        });
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero utente Google:', error);
        throw error;
    }
};

/**
 * Esegue logout da Google
 */
export const logoutGoogle = async () => {
    try {
        await axios.get(`${API_BASE_URL}/logout`, { withCredentials: true });
        console.log('Logout eseguito con successo');
    } catch (error) {
        console.error('Errore durante il logout:', error);
    }
};
