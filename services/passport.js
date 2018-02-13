

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
    // Query user
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
        

       const existingUser = await User.findOne({googleId: profile.id});
        if(existingUser) {
            console.log("User Already exist");
            return done(null, existingUser);
        }


        /* 
            Query chruchBoard document here
            Static data below is currenly in use
        */
        const chruchBoard = [
            {name: "Jerick Bilalat", title: "Chairman", userType: "admin"},
            {name: "Jane Doe", title: "Clerk", userType: "default"}
        ]

        /*
            Create user if user is a member of the churdBoard
        */
        const member =  chruchBoard.find( user => formatStr(user.name) === formatStr(profile.displayName)) || false;
        if(member) {
            // create user according to their userType
            (member.userType === 'admin') ? createUser(member.title, 'admin') : createUser(member.title,'default');
        }else {
            console.log("Your display name is not in the church board members list. Please contact support.");
            // redirect to a contat admin page
            done(null, {noUser: true});
        }
    
        // helper functions
        function formatStr(str) {
            return str.replace(/\s/g,'').toLowerCase();
        }
        async function createUser(title, userType) {
            console.log(`creating new user with and account type of ${userType}`);
            try {
                const user = await new User({
                    googleId: profile.id,
                    name: profile.displayName,
                    title,
                    userType })
                    .save();
                done(null, user);
            } catch (error) {
                res.status(500).json(error);
            }
            
        }

        
        
        
    })
);