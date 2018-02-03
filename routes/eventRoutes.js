

const mongoose = require('mongoose');  // for testing purposes

// Model
const Event = mongoose.model('events');

// Middlewares
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {

    app.get('/api/events',requireLogin, async (req, res) => {
        res.send({
            title: req.user
        });
    });

    app.post('/api/events',requireLogin, async (req, res) => {
        const { name, title: role } = req.user;
        const {title, body} = req.body;

        // create collection
        const event = new Event({
            title,
            body,
            author: name,
            authorRole: role
        });

        // save event
        try {
            await event.save();
            // send updated user object
            const user = await req.user;
            res.send(user);
        } catch (error) {
            res.status(422).send(error);
        }

    });

}

