const request = require('request');
const API_URL = require('./../config').API_URL;

module.exports = (req, res) => {
    let searchParam = req.query.search;
    if (searchParam) {
        request(API_URL + `sites/MLA/search?q=${searchParam}`, function (error, response, body) {
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