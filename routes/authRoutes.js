const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );

    // returns current user that is login
    app.get('/api/current_user', (req, res) => {
        // req.user is added by passport when user is serialized
        res.send(req.user);
    })
}
