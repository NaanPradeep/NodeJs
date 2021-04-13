const {
		getCategories, 
		getProductsByCategory
	} = require('../repository');


const getHomePage = async (req, res) => {

	const categories = await getCategories();
	const productsByCategories = [];
	console.log(categories)

	if(!categories.categoriesKeys) {
		return res.status(404).json({success: false, err: categories.msg});
	}
	const categoriesList = categories.categoriesKeys;

	for(category of categoriesList) {
		const temp1 = {};
		const temp2 = await getProductsByCategory(category);
		if(!temp2.productsByCategory) {
			return res.status(404).json({success: false, msg: "error2"});
		}
		temp1[category] = temp2;
		productsByCategories.push(temp1);
	}
	res.status(200).json({success: true, data: productsByCategories})
}

module.exports = getHomePage;