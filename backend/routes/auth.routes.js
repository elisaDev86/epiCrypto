const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const { check } = require("express-validator");
const auth = require('../middleware/auth'); // Importare il middleware di autenticazione
const User = require('../models/user');


const router = express.Router();

// Rotta per la registrazione
router.post(
    "/register",
    [
        check("name", "Il nome è obbligatorio").not().isEmpty(),
        check("email", "Inserisci un'email valida").isEmail(),
        check("password", "La password deve avere almeno 6 caratteri").isLength({ min: 6 }),
    ],
    registerUser
);

// Rotta per il login dell'utente
router.post(
    "/login",
    [
        check("email", "Inserisci un'email valida").isEmail(),
        check("password", "La password deve avere almeno 6 caratteri").isLength({ min: 6 }),
    ],
    loginUser
);

// Rotta privata per ottenere i dati dell'utente loggato
router.get('/me', auth, async (req, res) => {  // Usa il middleware auth qui
    try {
        // Trova l'utente nel DB tramite l'ID del token (senza password)
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Errore del server');
    }
});

// Rotta per eliminare un utente autenticato
router.delete('/me', auth, async (req, res) => {
    try {
        // Trova e elimina l'utente dal DB tramite l'ID del token
        const user = await User.findByIdAndDelete(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'Utente non trovato' });
        }

        // Rispondi con un messaggio di successo
        res.json({ message: 'Utente eliminato con successo' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Errore del server');
    }
});


module.exports = router;
