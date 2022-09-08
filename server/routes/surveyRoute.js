const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredit = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.export = app => {
    app.post('/api/surveys',
        requireLogin,
        requireCredit,
        (req, res) => {
            const { title, subject, body, recipients } = req.body;

            const survey = new Survey({
                title,
                subject,
                body,
                recipient: recipients.split(',').map(email => ({ email: email.trim() })),
                _user: req.user.id,
                dateSent: Date.now()
            });
        });
};