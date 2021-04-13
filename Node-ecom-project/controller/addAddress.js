const BillingAddress = require('../model/userBillingAddress');
const ShippingAddress = require('../model/userShippingAddress');


const addBillingAddress = async (req, res) => {

	const addressQuery = await BillingAddress.find({userId: req.user._id});

	const billAddress = new BillingAddress({
			userId: req.user._id,
			streetNumber: req.body.streetNumber,
			streetName: req.body.streetName,
			city: req.body.city,
			zipCode: req.body.zipCode,
			country: req.body.country
	})

	if(addressQuery.length === 0) {
		try {
			const savedAddress = await billAddress.save();
			res.status(201).json({success: true, data: savedAddress});
		}catch(err) {
			res.status(401).json({success: false, msg: err});
		}
	}
	else {
		try {
			const deletedAddress = await BillingAddress.deleteOne({userId: req.user._id});
			const savedAddress = await billAddress.save();
			res.status(201).json({success: true, data: deletedAddress});
		}catch(err) {
			res.status(401).json({success: false, msg: err});
		}
	}	
}

const addShippingAddress = async (req, res) => {
	const shipAddress = new ShippingAddress({
		userId: req.user._id,
		streetNumber: req.body.streetNumber,
		streetName: req.body.streetName,
		city: req.body.city,
		zipCode: req.body.zipCode,
		country: req.body.country
	})

	try {
		const savedAddress = await shipAddress.save();
		res.status(201).json({success: true, data: savedAddress});
	}catch(err) {
		res.status(401).json({success: false, msg: err});
	}
}

module.exports = {addBillingAddress, addShippingAddress};