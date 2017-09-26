const mongoose = require('mongoose');
const bluebird = require('bluebird'); //latest version of mongoose requires to use a Promise library 

mongoose.Promise = bluebird;

// Schema
const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
    },
    companyName: {
        type: String,
    },
    customerAddress: {
        type: String,
    },
    orderedItem: {
        type: String,
    }
});
module.exports = mongoose.model('order', orderSchema);