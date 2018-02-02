
const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    body: String,
    isAnnounced: { type: Boolean, default: true},
    author: String,
    dateCreated: { type: Date, default: Date.now()}
});

mongoose.model('events', eventSchema);