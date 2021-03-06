const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	productId : {
		type: String,
		required: true,
	},
	productName: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		default: 1
	}
})


module.exports = mongoose.model('Cart', cartSchema);