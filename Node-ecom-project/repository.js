const Products = require('./model/Product');


const getCategories = async () => {
	let categories = {};

	try {
		const products = await Products.find({});

		for(product of products) {
			if(!(product.category in categories)) {
				categories[product.category] = 1; 
			}
			else {
				categories[product.category] =+ 1;
			}
		}
		const categoriesList = Object.keys(categories);
		return {categoriesKeys: categoriesList, allCategories: categories};

	}catch(err) {
		return {categoriesKeys: null, msg : err};
	}
}


const getProductsByCategory = async (findCategory) => {
	try {
		const products = await Products.find({category: findCategory});
		console.log(products);
		return {productsByCategory: products};
	}catch(err) {
		return {productsByCategory: null, msg: err};
	}
	
}



module.exports = {getCategories, getProductsByCategory};