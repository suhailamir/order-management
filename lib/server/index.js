const restify = require('restify');
const restifyValidation = require('node-restify-validation');



const serverConfig = {
    name: 'order-management',
    version: '1.0.0',
};


function createServer() {
    const server = restify.createServer(serverConfig);
    server
        .on('error', onError)
        .on('listening', onListening)
        .use(restify.plugins.queryParser())
        .use(restify.plugins.bodyParser())
        .use(restifyValidation.validationPlugin({
            errorsAsArray: true,
        }))
        .listen(process.env.PORT);

    return server;
}

// -------------------------------------

function onError(err) {
    error(err);
    throw new Error(err);
}

function onListening() {
    console.log(`Server listening on port : ${process.env.PORT}`);

}
module.exports = createServer;