const User = require('../model/User');
const BillAddress = require('../model/userBillingAddress');
const ShippingAddress = require('../model/userShippingAddress');

const getUserInfo = async (req, res) => {
	const userInfo = await User.findOne({_id: req.user._id});
	const userBillAddress = await BillAddress.findOne({userId: req.user._id});
	const userShipAddress = await ShippingAddress.find({userId: req.user._id});
	res.status(200).json({
						success: true, 
						data: userInfo, 
						userBillingAddress: userBillAddress, 
						userShippingAddress: userShipAddress
					});
}


module.exports = getUserInfo;