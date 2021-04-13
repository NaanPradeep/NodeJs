const Joi = require('joi');

const signUpValidation = (data) => {
	const schema = Joi.object({
		userName: Joi.string()
	        .min(6)
	        .max(30)
	        .required(),
	    email: Joi.string()
	    	.min(7)
	    	.max(30)
	    	.required()
	    	.email(),
	    password: Joi.string()
	    	.min(7)
	    	.max(100)
	    	.required()
	})

	return schema.validate(data);
}

const signInValidation = (data) => {
	const schema = Joi.object({
	    email: Joi.string()
	    	.min(7)
	    	.max(30)
	    	.required()
	    	.email(),
	    password: Joi.string()
	    	.min(7)
	    	.max(100)
	    	.required()
	})

	return schema.validate(data);
}

module.exports.signUpValidation = signUpValidation;
module.exports.signInValidation = signInValidation;