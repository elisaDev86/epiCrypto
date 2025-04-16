const Reaction = require('../models/interaction');

// Lista di criptovalute supportate
const supportedCryptos = ['bitcoin', 'ethereum', 'litecoin'];

// Aggiungi una reazione a una crypto
const addReaction = async (req, res) => {
    const { emoji, crypto } = req.body;
    const userId = req.user?.id;

    // Log dei dati ricevuti
    console.log('Dati ricevuti:', { emoji, crypto, userId });

    // Controllo che i dati siano presenti
    if (!emoji || !crypto) {
        console.error('Dati mancanti: emoji o crypto');
        return res.status(400).json({ msg: 'Dati mancanti: emoji o crypto' });
    }

    // Controllo che l'utente sia autenticato
    if (!userId) {
        console.error('Utente non autenticato');
        return res.status(401).json({ msg: 'Utente non autenticato' });
    }

    // Validazione della crypto
    if (!supportedCryptos.includes(crypto.toLowerCase())) {
        console.error('Crypto non valida:', crypto);
        return res.status(400).json({ msg: 'Crypto non supportata' });
    }

    try {
        // Verifica se la reazione esiste già
        console.log('Verifica reazione esistente...');
        let existingReaction = await Reaction.findOne({ emoji, crypto, user: userId });

        if (existingReaction) {
            // Se la reazione esiste, aggiorna la data e altre informazioni
            console.log('Reazione esistente trovata, aggiornamento...');
            existingReaction.emoji = emoji;
            existingReaction.createdAt = Date.now(); // Aggiorna la data di creazione

            const updatedReaction = await existingReaction.save();
            console.log('Reazione aggiornata:', updatedReaction);
            return res.status(200).json(updatedReaction); // Risponde con la reazione aggiornata
        }

        // Se la reazione non esiste, crea una nuova reazione
        console.log('Creazione nuova reazione...');
        const newReaction = new Reaction({
            emoji,
            crypto,
            user: userId
        });

        // Salvataggio della nuova reazione
        const saved = await newReaction.save();
        console.log('Nuova reazione salvata:', saved);
        res.status(201).json(saved); // Risponde con la nuova reazione
    } catch (err) {
        console.error('Errore durante il salvataggio della reazione:', err);

        // Gestione errore per duplicati (errori di conflitto)
        if (err.code === 11000) {
            return res.status(409).json({
                msg: 'Hai già aggiunto questa reazione a questa crypto.'
            });
        }

        // Errore generico
        res.status(500).json({ msg: 'Errore nel salvataggio della reazione' });
    }
};

// Ottieni tutte le reazioni per una crypto
const getReactionsByCrypto = async (req, res) => {
    try {
        const { crypto } = req.params;

        console.log('Recupero reazioni per crypto:', crypto);
        const reactions = await Reaction.find({ crypto }).populate('user', 'name');
        console.log('Reazioni trovate:', reactions);
        res.json(reactions);
    } catch (err) {
        console.error('Errore nel recupero delle reazioni:', err);
        res.status(500).json({ msg: 'Errore nel recupero delle reazioni' });
    }
};

module.exports = { addReaction, getReactionsByCrypto };
