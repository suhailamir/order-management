const orders = require('../middleware/orders');

module.exports = function routes(server) {

    server.get({ url: '/seed' },
        orders.seedOrders,
        genericResponse);

    server.get({ url: '/orders' },
        orders.getOrders,
        genericResponse);
    server.get({ url: '/orders/count' },
        orders.getOrdersCount,
        genericResponse);
    server.get({
            url: '/orders/company/:company',
            validation: {
                resources: {
                    company: { isRequired: true },
                },
            }
        },
        orders.getOrderByCompany,
        genericResponse);
    server.get({
            url: '/orders/address/:address',
            validation: {
                resources: {
                    address: { isRequired: true },
                },
            }

        },
        orders.getOrderByAddress,
        genericResponse);
    server.del({
            url: '/orders/:orderId',
            validation: {
                resources: {
                    orderId: { isRequired: true },
                },
            }
        },
        orders.deleteOrder,
        genericResponse);
};

function genericResponse(req, res) {
    if (res.error) {
        res.send(400, { error: res.error });
    } else {
        res.send(200, { data: res.data });
    }
}