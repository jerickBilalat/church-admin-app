

const mongoose = require('mongoose');  // for testing purposes
const ctrlEvents = require('../controllers/events');

// MIDDLEWARES
const requireLogin = require('../middlewares/requireLogin');

// HELPERS
function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
}

// ROUTES
module.exports = app => {

    app.get('/api/events', requireLogin, ctrlEvents.eventsListAll);
    app.post('/api/events', requireLogin, ctrlEvents.eventsCreate);

}

