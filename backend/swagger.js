const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definizione delle opzioni di configurazione per Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0', // Versione dello standard OpenAPI
        info: {
            title: 'Crypto API', // Nome dell'API
            version: '1.0.0',
            description: 'Documentazione delle API per il progetto Crypto', // Descrizione
            contact: {
                name: 'EpiCrypto Team', // Nome del team di sviluppo
                url: 'https://github.com/epicrypto', // URL GitHub (o altro)
                email: 'contact@epicrypto.com', // Email di contatto
            },
            licenses: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT', // Licenza open-source (se applicabile)
            },
        },
        servers: [
            {
                url: 'http://localhost:5001/api', // URL del server di sviluppo
                description: 'Server di sviluppo',
            },
            {
                url: 'https://api.epicrypto.com/api', // URL di produzione (esempio)
                description: 'Server di produzione',
            },
        ],
    },
    apis: ['./routes/*.js'], // Aggiungi il percorso dei file contenenti le definizioni delle rotte
};

// Creazione della documentazione Swagger con swagger-jsdoc
const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
