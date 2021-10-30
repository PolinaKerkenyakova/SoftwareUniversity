const { Schema, model } = require('mongoose');

const schema = new Schema({
   title: {type: String, required: [true, 'Title is required!'], minlength: [6, 'Title should be at least 6 chars long!']},
   keyword: {type: String, required: [true, 'Keyword is required!'], minlength: [6, 'Keyword should be at least 6 chars long!']},
   location: {type: String, required: [true, 'Location is required!'], maxlength: [10, 'Location max length could 10 chars!']},
   creationDate: {type: String, required: [true, 'Date of creation is required!'], minlength: [10, 'Date should be 10 chars in the format: 02.02.2021'], maxlength: 10, },
   image: {type: String, required: [true, 'Image is required!'], validate:[/https?/, 'Image should start with http or https!']},
   description: {type: String, required: [true, 'Description is required!'], minlength: [10, 'Description should be at least 8 chars!']},
   author: {type: Schema.Types.ObjectId, ref: 'User'},
   postVotes:[{type: Schema.Types.ObjectId, ref: 'User', default: []}],
   postRating: {type: Number, default: 0}
});
 
module.exports = model('Post', schema);