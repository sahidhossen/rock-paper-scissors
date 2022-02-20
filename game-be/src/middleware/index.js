const notFound = (req, res) => res.status(404).json({ message: 'Route not found!' });

const serverError = (req, res) => {
	res.status(500).json({ message: 'Inernal server error' });
};

module.exports = {
	notFound,
	serverError,
};
