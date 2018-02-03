
const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: { type: String, required: true},
    body: { type: String, required: true},
    isAnnounced: { type: Boolean, default: true},
    author: { type: String, required: true},
    authorRole: { type: String, required: true},
    dateCreated: { type: Date, default: Date.now(), required: true}
});

mongoose.model('events', eventSchema);