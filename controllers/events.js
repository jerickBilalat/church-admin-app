
const mongoose = require('mongoose');

// MODEL
const Event = mongoose.model('events');

// HELPERS
function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
}

/** GET list of events */
async function eventsListAll(req, res) {
    try {
        const events = await Event.find({});
        sendJSONresponse(res, 200, events);
    } catch (error) {
        console.log(error);
        sendJSONresponse(res, 500, error);
    }
}

/** POST a new event */
async function eventsCreate(req, res) {

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
        sendJSONresponse(res, 200, user);
    } catch (error) {
        sendJSONresponse(res, 402, error);
    }
}


module.exports = {
    eventsListAll,
    eventsCreate
}