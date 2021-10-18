const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    duration: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    usersEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }]
});

module.exports = model('Course', schema);