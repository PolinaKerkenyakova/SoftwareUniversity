const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true, minlength: [6, 'Name should be at least 6 chars long'] },
    type: { type: String, enum: ['Apartment', 'Villa', 'House'], required: true },
    year: { type: Number, required: true, min: [1850, 'Year should be after 1850'], max: [2021, 'Year should be before 2021'] },
    city: { type: String, required: true, minlength: [4, 'City should be at least 4 chars long'] },
    homeImage: { type: String, required: true },
    description: { type: String, required: true, maxlength: [60, 'Description length can not exceed 60 chars'] },
    availablePieces: { type: Number, required: true, min: [0, 'Available pieces should be a positive number'], max: [10, 'Available pieces can not exceed 10'] },
    rentedHome: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = model('Housing', schema)