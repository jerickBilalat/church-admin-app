const express = require("express");
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

// order of these two file is important
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// configure cookie with cookie-session middleware
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));
// set passport to use key
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`starting app at port: ${PORT}`)
});