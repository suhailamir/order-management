const mongoose = require('mongoose');

module.exports.initDb = function(dbUri, options, callback) {

    mongoose.connection.openUri(dbUri, options);

    mongoose.connection.once('open', function() {
        console.log('DB connected');
    });
};