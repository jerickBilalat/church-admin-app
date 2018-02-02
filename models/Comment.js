
const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    commentAuthur: { type: String, required: true },
    commentBody: { type: String, required: true },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = commentSchema;