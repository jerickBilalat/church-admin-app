

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
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToke, profile, done) => {
        // create new instance of user model
       const existingUser = await User.findOne({googleId: profile.id});

        if(existingUser) {
            console.log("User Already exist");
            return done(null, existingUser);
        }

        // query document of chruchBoard
        // use static data for now
        const chruchBoard = [
            {name: "Jerick Bilalat", title: "chairman", accountType: "admin"},
            {name: "Jane Doe", title: "clerk", accountType: "default"}
        ]

        // helper function
        function formatStr(str) {
            return str.trim().toLowerCase();
        }
        async function createUser(title, accountType) {
            console.log(`creating new user with and account type of ${accountType}`);
            const user = await new User({
                googleId: profile.id,
                name: profile.displayName,
                title,
                accountType })
                .save();
            done(null, user);
        }

        const member =  chruchBoard.find( user => formatStr(user.name) === formatStr(profile.displayName)) || false;

        if(member) {
            // create user according to their accountType
            (member.accountType === 'admin') ? createUser(member.title, 'admin') : createUser(member.title,'default');
        }else {
            console.log("Your display name is not in the church board members list. Please contact support.");
            return done(null);
        }
    
        
        
        
    })
);