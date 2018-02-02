
// DEPENDENCIES
const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const keys = require('./config/keys');

// INSTANTIATION
const app = express();
mongoose.connect(keys.mongoURI);

// MODELS
require('./models/User');
require('./models/Event');

//CONFIGURATION


// MIDDLEWARES
require('./services/passport');
app.use(bodyParser.json());
// configure cookie with cookie-session middleware
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