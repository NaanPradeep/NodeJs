const Cart = require('../model/Cart');

const getCart = async (req, res) => {

	try {
		const cart = await Cart.find({userId: req.user._id});
		if(cart.length === 0) {
			return res.status(200).json({success: true, data: "Your cart is Empty"});
		}
		res.status(200).json({success: true, data: cart});
	}catch(err) {
		res.status(400).json({success: true, msg: err});
	}
}

module.exports = getCart;