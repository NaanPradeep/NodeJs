const jwt = require('jsonwebtoken');


const auth = async (req, res, next) => {
	const token = req.header('auth-token');
	if(!token) return res.status(401).json({success: false, msg: "Please login to access the content"})

	try {
		const verified = await jwt.verify(token, process.env.SECRET_KEY);
		req.user = verified;
		next();
	}catch(err) {
		res.status(400).send("Invalid Token");
	}
}

module.exports = auth;