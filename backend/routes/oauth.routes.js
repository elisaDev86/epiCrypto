// routes/oauth.routes.js

const express = require('express');
const passport = require('passport');
const oauthController = require('../controllers/oauth.controller');

const router = express.Router();

// Inizia il login con Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
}));

// Callback dopo autenticazione
router.get('/callback-google',
    passport.authenticate('google', { failureRedirect: '/' }),
    oauthController.googleCallback
);

module.exports = router;
