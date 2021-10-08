const { Schema, model } = require('mongoose');

const schema = new Schema({

    title: { type: String, required: [true, 'Title is required!'] },
    description: { type: String, required: [true, 'Description is required!'], maxlength: [50, 'Description must be under 50chars long!'] },
    imageUrl: { type: String, required: [true, 'Image is required!'] },
    public: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now},
    usersLikes: [{ type: Schema.Types.ObjectId, ref: 'User', default: []}],
    author: { type: String, required: true }
});

module.exports = model('Play', schema)