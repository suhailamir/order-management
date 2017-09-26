const db = require('./lib/database');
const restify = require('restify');
const server = require('./lib/server')();
db.initDb('mongodb://localhost:27017/borderguru');

require('./lib/routes')(server);