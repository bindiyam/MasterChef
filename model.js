var mongoose = require('mongoose');

exports.Category = mongoose.model('Category', {
	_id: Number,
	name: String,
	description: String
});