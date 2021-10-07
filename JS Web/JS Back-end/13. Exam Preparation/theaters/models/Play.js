const { Schema, model } = require('mongoose');

const schema = new Schema({

    title: { type: String, required: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true },
    public: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true },
    usersLikes: [{ type: Schema.Types.ObjectId, ref: 'User', default: []}],
    author: { type: String, required: true }
});

module.exports = model('Play', schema)