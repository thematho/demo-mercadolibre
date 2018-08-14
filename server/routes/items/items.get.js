const request = require('request');
const config = require('./config');

module.exports = (req, res) => {
    let id = req.params.id;
    if (id) {
        request(config.API_URL + `items/${id}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(body));
            }
        });
    } else {
        res.json({});
    }
};