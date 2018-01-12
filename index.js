const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');

// the order of these two file is important
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`starting app at port: ${PORT}`)
});