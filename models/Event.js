
const mongoose = require('mongoose');
const { Schema } = mongoose;
//const commentSchema = require('./Comment');

const eventSchema = new Schema({
    title: String,
    body: String,
    isAnnounced: { type: Boolean, default: true},
    author: String
    // expireIn: { type: Date, required: true }
    //comments: [commentSchema]
});

mongoose.model('events', eventSchema);