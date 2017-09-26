const Order = require('../models/order');

module.exports = {
    getOrders,
    getOrdersCount,
    seedOrders,
    getOrderByCompany,
    getOrderByAddress,
    deleteOrder,
};
let orders = [{
        orderId: '001',
        companyName: 'SuperTrader',
        customerAddress: 'Steindamm 80',
        orderedItem: 'Macbook'
    },
    {
        orderId: '002',
        companyName: 'Cheapskates',
        customerAddress: 'Reeperbahn 153',
        orderedItem: 'Macbook'
    }, {
        orderId: '003',
        companyName: 'MegaCorp',
        customerAddress: 'Steindamm 80',
        orderedItem: 'Book "Guide to Hamburg"'
    }, {
        orderId: '004',
        companyName: 'SuperTrader',
        customerAddress: 'Sternstrasse 125',
        orderedItem: ' Book "Cooking 101"'
    }, {
        orderId: '005',
        companyName: 'SuperTrader',
        customerAddress: 'Ottenser Hauptstrasse 24',
        orderedItem: 'Inline Skates'
    }, {
        orderId: '006',
        companyName: 'MegaCorp',
        customerAddress: 'Reeperbahn 153',
        orderedItem: 'Playstation'
    }, {
        orderId: '007',
        companyName: 'Cheapskates',
        customerAddress: 'Lagerstrasse 11',
        orderedItem: 'Flux compensator'
    }, {
        orderId: '008',
        companyName: 'SuperTrader',
        customerAddress: 'Reeperbahn 153',
        orderedItem: 'Inline Skates'
    }

];

function seedOrders(req, res, next) {
    Order.collection.insert(orders)
        .then((orders) => {
            res.data = orders;
            return next();
        })
        .catch((error) => {
            res.error = error;
            return next();
        });
}

function getOrders(req, res, next) {
    Order.find()
        .then((orders) => {
            res.data = orders;
            return next();
        })
        .catch((error) => {
            res.error = error;
            return next();
        });
}

function getOrderByCompany(req, res, next) {
    Order.find({ companyName: req.params.company })
        .then((orders) => {
            res.data = orders;
            return next();
        })
        .catch((error) => {
            res.error = error;
            return next();
        });
}

function getOrderByAddress(req, res, next) {

    Order.find({ customerAddress: req.params.address })
        .then((orders) => {
            res.data = orders;
            return next();
        })
        .catch((error) => {
            res.error = error;
            return next();
        });
}

function getOrdersCount(req, res, next) {
    let countBy = req.query.countBy ? req.query.countBy : 'orderedItem';
    Order.aggregate({
            $group: {
                _id: {
                    [countBy]: '$' + countBy,

                },
                count: { $sum: 1 }
            }
        })
        .sort('field -count')
        .exec()
        .then((orders) => {
            res.data = orders;
            return next();
        })
        .catch((error) => {
            res.error = error;
            return next();
        });
}

function deleteOrder(req, res, next) {
    Order.remove({ orderId: req.params.orderId })
        .then((orders) => {
            if (orders.result.n == 0) {
                res.data = 'Order not found';
            } else {
                res.data = 'Order deleted';
            }
            return next();
        })
        .catch((error) => {
            res.error = error;
            return next();
        });
}