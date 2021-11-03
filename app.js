const http = require('http');
const config = require('./config');
const logger = require('./logger');

const { APP_PORT, ENV } = config;
const { log } = logger;

http.createServer((req, res) => {
    log();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('Hello World!');
    res.end();
}).listen(APP_PORT, () => console.log(`Server is listening on port ${APP_PORT}. Env is ${ENV}`));