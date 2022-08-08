const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);
const app = express();

const authRoutes = require('./routes/authRoutes');
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
