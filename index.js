
// DEPENDENCIES
const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

// MODELS
require('./models/User');
require('./models/Event');

// SERVICES
require('./services/passport'); // must require before User model

const keys = require('./config/keys');

// INSTANTIATION
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useMongoClient: true});

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));
// set passport to use key
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
require('./routes/authRoutes')(app);
require('./routes/eventRoutes')(app);

// BOOTUP
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`starting app at port: ${PORT}`)
});