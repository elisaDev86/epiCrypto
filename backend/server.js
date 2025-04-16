require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
const passport = require('passport');  // ⬅️ IMPORTA passport
require('./config/passport');          // ⬅️ IMPORTA la STRATEGY configurata
const session = require('express-session'); // ⬅️ Per supportare le sessioni utente

const server = express();

// Connessione al database
connectDB();

// CORS
server.use(cors());

// Middleware JSON
server.use(express.json());

// Session middleware (necessario per OAuth con passport)
server.use(session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// Inizializza passport e sessioni
server.use(passport.initialize());
server.use(passport.session());

// Swagger
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotte API
server.use('/api/auth', require('./routes/auth.routes'));
server.use('/api/reactions', require('./routes/interaction.routes'));
server.use('/api/oauth', require('./routes/oauth.routes')); // Rotte OAuth Google

// Test
server.get('/', (req, res) => {
    res.send('API is running...');
});

// Avvio
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
