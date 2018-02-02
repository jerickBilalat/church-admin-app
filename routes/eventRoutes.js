

const express = require("express");
// const eventRoutes = express.router();
const mongoose = require('mongoose');  // for testing purposes


// Middlewares
const requireLogin = require('../middlewares/requireLogin');


const Event = mongoose.model('events'); // for testing purposes


// eventRoutes.route('/api/events')
//     .all(requireLogin)
//     .get((req, res) => {
//         // query database
        
//         // dummy data
//         res.send({title: 'test'})
//     })
//     .post((req, res)=> {
//         const { title, body, authur } = req.body;
//         const event = new Event({
//             title,
//             body,
//             authrur
//         })
//     })

// module.exports = eventRoutes;

module.exports = (app) => {

    app.get('/api/events',requireLogin, (req, res) => {
        res.send({
            title: "test title"
        });
    });

    app.post('/api/events',requireLogin, (req, res) => {
        const {title, body, authur, isAnnounced = true } = req.body;

        // save event
        const event = new Event({
            title,
            body,
            authur,
            isAnnounced
        });

        // email events to users
            // fetct users
            // send email to users

    });

}

