import axios from 'axios';

export const sendUserReaction = async (reaction, crypto, token) => {
    try {
        // Recupera il token da localStorage se non viene passato come argomento
        if (!token) {
            token = localStorage.getItem('authToken');
            if (!token) {
                console.error("Token non trovato o non valido");
                return;
            }
        }

        // Verifica che i dati siano validi
        if (!reaction || !crypto) {
            console.error('Dati mancanti: emoji o crypto');
            return;
        }

        // Invia la richiesta POST
        const response = await axios.post(
            'http://localhost:5002/api/reactions/add',
            { emoji: reaction, crypto },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );

        return response.data;
    } catch (error) {
        // Gestione degli errori
        console.error('Errore durante l\'invio della reazione:', error.response ? error.response.data : error.message);
        throw error;
    }
};
