const mongoose = require('mongoose');

const shippingAddressSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	streetNumber: {
		type: String,
		required: true
	},
	streetName: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	zipCode: {
		type: Number,
		required: true
	},
	country: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('shippingAddress', shippingAddressSchema);