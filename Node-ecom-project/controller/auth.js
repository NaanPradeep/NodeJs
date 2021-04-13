const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require('../model/User');

const { signUpValidation, signInValidation } = require('../validation');

const register = async (req, res) => {
	// validating the form data before we insert in the database
	const {error} = signUpValidation(req.body);
	if(error) return res.send(error.details[0].message)

	//checking the database if the email already exist
	const emailExist = await User.findOne({email: req.body.email});
	if(emailExist) return res.status(400).json({success: false, msg: "Email already exists"})

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// creating new User model
	const newUser = new User({
		userName: req.body.userName,
		email: req.body.email,
		password: hashedPassword,
	})

	//saving into the database
	try {
		const savedUser = await newUser.save();
		res.status(201).json({success: true, data: savedUser});
	} catch(err) {
		res.status(400).json({success: false, msg: err});
	}
	
}

const login = async (req, res) => {
	const {error} = signInValidation(req.body);
	if(error) return res.status(400).json({success: false, msg: error.details[0].message})

	const user = await User.findOne({email: req.body.email});
	if(!user) return res.status(400).json({success: false, msg: "Email or password is invalid"})

	const validPass = await bcrypt.compare(req.body.password, user.password);
	if(!validPass) return res.status(400).json({success: false, msg: "Email or password is invalid"})

	const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);
	res.header('auth-token', token).send(token);
}

module.exports = {register, login};