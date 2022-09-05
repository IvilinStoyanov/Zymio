const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        if (!req.user) {
            // TODO: rework later
            return req.status(401).send({error: 'Unauthorized'})
        }

        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'test',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();
    });
};