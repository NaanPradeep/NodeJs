const Product = require('../model/Product');

const addNewProduct = async (req, res) => {

	const newProduct = new Product({
		productName: req.body.productName,
		brandName: req.body.brandName,
		sellerName: req.body.sellerName,
		category: req.body.category,
		price: req.body.price,
		description: req.body.description
	})

	try {
		const savedProduct = await newProduct.save();
		res.status(201).json({success: true, data: savedProduct});
	}catch(err) {
		res.status(400).json({success: true, data: err});
	}
}

module.exports = addNewProduct;