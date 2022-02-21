const express = require('express');
const cors = require('cors');
const { notFound, serverError } = require('./middleware');
const routes = require('./routes');

const createApp = () => {
	const app = express();

	app.use(express.json());

	app.use(express.urlencoded({ extended: true }));

	app.use(cors());

	app.use('/api', routes);

	app.use(notFound);

	app.use(serverError);

	return app;
};

module.exports = createApp;
