const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	email: {
		type: String,
		required: true,
		min : 10,
		max : 255
	},
	password: {
		type: String,
		required: true,
		min : 7,
		max : 500
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User', userSchema);
