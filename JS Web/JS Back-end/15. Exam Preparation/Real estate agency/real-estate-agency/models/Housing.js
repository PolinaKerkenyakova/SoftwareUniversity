const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: [true, 'Name is required'], minlength: [6, 'Name should be at least 6 chars long'] },
    type: { type: String, enum: { values: ['Apartment', 'Villa', 'House'], message: 'Property type should be Apartment, Villa or House' }, required: [true, 'Property type is required'] },
    year: { type: Number, required: [true, 'Year is required'], min: [1850, 'Year should be after 1850'], max: [2021, 'Year should be before 2021'] },
    city: { type: String, required: [true, 'City is required'], minlength: [4, 'City should be at least 4 chars long'] },
    homeImage: { type: String, required: [true, 'Image of the property is required'] },
    description: { type: String, required: [true, 'Description is required'], maxlength: [60, 'Description length can not exceed 60 chars'] },
    availablePieces: { type: Number, required: [true, 'Available pieces can be from 0 to 10'], min: 0, max: 10 },
    homeRentedBy: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Housing', schema)