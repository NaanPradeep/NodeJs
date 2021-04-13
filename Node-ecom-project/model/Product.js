const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true,
		min : 5,
		max : 50
	},
	brandName: {
		type: String,
		required: true,
		min: 5,
		max: 30
	},
	sellerName: {
		type: String,
		required: true,
		min: 5,
		max: 20
	},
	category: {
		type: String,
		required: true,
		min: 3,
		max: 20
	},
	price: {
		type: Number,
		required: true,
		default: 0
	},
	description: {
		type: String,
		required: true,
		min : 10,
		max : 1000
	}

})

module.exports = mongoose.model('Product', productSchema);