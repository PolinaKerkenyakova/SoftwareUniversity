const { Schema, model } = require('mongoose');

const schema = new Schema({
    startPoint: { type: String, required: [true, 'Starting point is required!'], minlength: [4, 'Starting point should be at least 4 chars long!'] },
    endPoint: { type: String, required: [true, 'End point is required!'], minlength: [4, 'End point should be at least 4 chars long!'] },
    date: { type: String, required: [true, 'Date is required!'] },
    time: { type: String, required: [true, 'Time is required!'] },
    carImage: { type: String, required: [true, 'Car image is required!'], validate: [/^https?/, 'Image url should start with http or https!'] },
    carBrand: { type: String, required: [true, 'Car brand is required!'], minlength: [4, 'Car brand should be at least 4 chars long!'] },
    seats: { type: Number, required: [true, 'Available seats count is required!'], min: [1, 'Minimum available seat can be 1!'], max: [4, 'Maximum available seats can be 4!'] },
    price: { type: Number, required: [true, 'Price is required!'], min: [1, 'Lowest price can be 1'], max: [50, 'Highest price can be 50'] },
    description: { type: String, required: [true, 'Description is required!'], minlength: [10, 'Descriptiion should be at least 10chars long!'] },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    buddies: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = model('Trip', schema)