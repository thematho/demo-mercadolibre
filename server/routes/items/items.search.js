const request = require('request');
const config = require('./../config');
const getCategories = require('./../categories/getCategories');

const formatItem = (item) => {
    let decimals = Number(item.price).toFixed(2).toString().split('.')[1];
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: Math.floor(item.price),
            decimals: Number(decimals)
        },
        picture: item.thumbnail,
        location: item.seller_address.state.name,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
    };
};

module.exports = (req, res) => {
    let searchParam = req.query.q;
    if (searchParam) {
        request(config.API_URL + `sites/MLA/search?q=${searchParam}&limit=${config.SEARCH_LIMIT}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let jsonRes = JSON.parse(body);
                let mappedResults = {
                    author: {
                        name: 'Matias',
                        lastname: 'Fernandez Martinez'
                    },
                    categories: [],
                    items: jsonRes.results.map(formatItem)
                };

                getCategories(jsonRes.results[0].category_id)
                    .then((categories) => {
                        mappedResults.categories = categories.path_from_root;
                        res.json(mappedResults);
                    })
                    .catch((err) => {
                        console.log('Érror getting categories', err)
                        res.json({ err: err });
                    });
            } else {
                res.status(500)
                    .send(`ML search API error, code ${response.statusCode}.
                            Message: ${response.statusMessage}`
                    );
            }
        });
    } else {
        res.json([]);
    }
};