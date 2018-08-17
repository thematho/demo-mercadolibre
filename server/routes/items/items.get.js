const request = require('request');
const API_URL = require('./../config').API_URL;
const getDescription = require('./items.description');

const getFormattedItem = (item, description) => {
    let decimals = Number(item.price).toFixed(2).toString().split('.')[1];

    return {
        author: {
            name: 'Matias',
            lastname: 'Fernandez Martinez'
        },
        item: {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.floor(item.price),
                decimals: Number(decimals)
            },
            picture: item.pictures[0].url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            category_id: item.category_id,
            description: description.plain_text,
        }
    };
};

module.exports = (req, res) => {
    let id = req.params.id;
    if (id) {
        request(API_URL + `items/${id}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let jsonResponse = JSON.parse(body);
                getDescription(id)
                    .then((description) => {
                        res.json(getFormattedItem(jsonResponse, description));
                    })
                    .catch((err) => res.json(err));
            } else {
                res.status(500).send(`ML items API error, code ${response.statusCode}. Message: ${response.statusMessage}`);
            }
        });
    } else {
        res.json({});
    }
};