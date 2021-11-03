require('dotenv').config();

const config = {
    APP_PORT: parseInt(process.env.APP_PORT) || 3001,
    ENV: process.argv.slice(2)
};

module.exports = config;