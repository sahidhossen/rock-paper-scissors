const dotenv = require('dotenv');
dotenv.config();

const { PORT = 5001 } = process.env;

module.exports = { PORT };
