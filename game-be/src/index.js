const { PORT } = require('../config');
const createApp = require('./createApp');

(async () => {
	const app = createApp();

	app.listen(PORT, () => {
		console.log('You app is running on port: ', PORT);
	});
})();
