const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: [true, 'Title is required!'], minlength: [4, 'Title should be at least 4 chars long!']},
    description: { type: String, required: [true, 'Description is required!'], minlength: [20, 'Description should be at least 20 chars long!'] },
    imageUrl: { type: String, required: [true, 'Image URL is required!'], validate: [/^https?/i, 'Image URL should start with http or https!']},
    duration: { type: String, required: [true, 'Duration is required!'] },
    createdAt: { type: Date, default: Date.now },
    usersEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    author: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model('Course', schema);