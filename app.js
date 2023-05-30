const http = require('http');
const routes = require('./routes');

console.log(routes.someTest);

const server = http.createServer(routes.handler);

server.listen(8080);
