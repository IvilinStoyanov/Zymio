const passport = require('passport');
const keys = require('../config/keys');

module.exports = app => {
    app.get('/', (req, res) => {
        
        res.send({ name: 'Zymio test', URI: keys.mongoURI, GoogleCientID: keys.googleClientID, googleSecret: keys.googleClientSecret, cookie: keys.cookieKey });
    });

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};