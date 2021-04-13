const Products = require('../model/Product');
const {getCategories, getProductsByCategory} = require('../repository');


const getAllCategories = async (req, res) => {	
	const categories = await getCategories(); 

	if(categories.categoriesKeys) {
		return res.status(200).json({success: true, data: categories.categoriesKeys})
	}
	res.status(404).json({success: true, msg: categories.msg});
}


const getCategory = async (req, res) => {
	const products = await getProductsByCategory(req.params.category);

	if(!products.productsByCategory) {
		return res.status(404).json({success: false, msg: products.msg});
	}

	res.status(200).json({success: true, data: products.productsByCategory});
}

module.exports = {getAllCategories, getCategory};