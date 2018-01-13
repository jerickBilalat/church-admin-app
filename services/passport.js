const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require('mongoose');

// Model
const User = mongoose.model('users');

// OAuth User Serialization and Deserialization
passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser((id, done) => {
    // query user
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})

// passport middleware for google strategy
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToke, profile, done) => {
        // create new instance of user model
        User.findOne({googleId: profile.id})
            .then(existingUser => {
                if(existingUser) {
                    console.log("User Already exist");
                    done(null, existingUser);
                }else {
                    new User( {googleId: profile.id})
                        .save()
                        .then(user => {done(null, user)});
                }
            })
    })
);