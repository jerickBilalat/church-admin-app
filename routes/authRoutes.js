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
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard'); // client route
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user); // req.user is added by passport when user is serialized
    });

    app.get('/api/logout', (req, res) => {
        req.logout(); // passport set the logout property in the req object
        res.redirect('/');
    })
}
