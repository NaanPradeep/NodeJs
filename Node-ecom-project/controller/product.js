const Cart = require('../model/Cart');
const Products = require('../model/Product');

const getProduct = async (req, res) => {
	try {
		const product = await Products.findOne({_id: req.params.productID});
		res.status(200).json({success: true, data: product});
	}catch(err) {
		res.status(404).json({success: false, msg: err});
	}
}

const addToCart = async (req, res) => {
	const product = await Products.findOne({_id: req.params.productID});
	let userCart = await Cart.find({userId: req.user._id, productId: req.params.productID});

	if(userCart.length !== 0) {
		const updatedCart = await Cart.updateOne(
			{userId: req.user._id, productId: req.params.productID},
			{$set: {quantity: Number(userCart[0].quantity) + 1}}
		)
		return res.status(201).json({success: true, data: updatedCart});
	}
	else {
		const cart = new Cart({
			userId: req.user._id,
			productId: product._id,
			productName: product.productName,
			price: product.price,
			quatity: 1
		})

		try {
			const savedCartItems = await cart.save();
			return res.status(201).json({success: true, data: savedCartItems});
		}catch(err) {
			return res.status(401).json({success: false, msg: "error1"});
		}
		
	}
}

module.exports = {getProduct, addToCart};