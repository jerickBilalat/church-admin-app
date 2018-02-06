

const mongoose = require('mongoose');  // for testing purposes

// Model
const Event = mongoose.model('events');

// Middlewares
const requireLogin = require('../middlewares/requireLogin');

// Helpers
function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
} 

module.exports = app => {

    app.get('/api/events', requireLogin, async (req, res) => {

        const events = await Event.find({}, (err, events) => {
            if(events.length === 0) {
                console.log("No events found")
                sendJSONresponse(res, 200, {"message": "server responded with empty result"});
                return;
            }
            if(err) {
                console.log("Failed to query events from the database");
                res.status(500);
            }
            res.send(events);
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

