const request = require('request');
const config = require('./../config');

module.exports = (req, res) => {
    let searchParam = req.query.search;
    if (searchParam) {
        request(config.API_URL + `sites/MLA/search?q=${searchParam}&limit=${config.SEARCH_LIMIT}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(body));
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