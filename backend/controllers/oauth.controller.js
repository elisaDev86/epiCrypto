
const User = require('../models/user');

/**
 * Callback dopo autenticazione Google
 * Questa funzione viene eseguita DOPO che Passport ha autenticato con successo.
 */
exports.googleCallback = async (req, res) => {
    try {
        // Passport salva l'utente autenticato in req.user
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: 'Autenticazione fallita' });
        }

        console.log("Utente autenticato con Google:", user);

        // Risposta JSON (se API) oppure redirect (se frontend web)
        res.redirect('/dashboard');

    } catch (error) {
        console.error("Errore nella callback di Google:", error);
        res.status(500).json({ message: 'Errore durante la gestione del login con Google' });
    }
};

/**
 * Logout utente
 */
exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
};
