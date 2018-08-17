module.exports = [
    {
        method: 'get',
        path: '/items',
        handler: require('./items.search')
    }, {
        method: 'get',
        path: '/items/:id',
        handler: require('./items.get')
    }
];


