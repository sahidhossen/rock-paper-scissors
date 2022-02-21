const parseError = (errorObject) => {
	let errorDetail = [];
	for (const key in errorObject) {
		errorDetail.push(errorObject[key].message);
	}
	return errorDetail.join(', ').replace(new RegExp('"', 'g'), '');
};

const validateQueryRequest = (
	res,
	req,
	next,
	schema,
	options = {
		abortEarly: false, // include all errors
		allowUnknown: true, // ignore unknown props
		stripUnknown: true, // remove unknown props
	},
) => {
	const { error, value } = schema.validate(req.query, options);
	if (error) {
		res.status(422).json({
			message: parseError(error.details),
			status: 422,
		});
	} else {
		req.body = value;
		next();
	}
};

module.exports = {
	validateQueryRequest,
};
