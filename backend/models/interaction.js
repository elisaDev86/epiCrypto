// schema per le interazioni tramite emoticon con riferimento all'utente

const mongoose = require('mongoose');

const ReactionSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true
    },
    crypto: {
        type: String, // es: 'BTC', 'ETH', ecc.
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 🔐 Impedisce che uno stesso utente aggiunga la stessa emoji alla stessa crypto più volte
ReactionSchema.index({ user: 1, crypto: 1, emoji: 1 }, { unique: true });

module.exports = mongoose.model('reaction', ReactionSchema);

