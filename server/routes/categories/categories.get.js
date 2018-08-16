const request = require('request');
const API_URL = require('./../config').API_URL;

module.exports = (req, res) => {
    let id = req.params.id;
    if (id) {
        request(API_URL + `categories/${id}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.json(JSON.parse(body));
            } else {
                res.status(500)
                    .send(`ML categories API error, code ${response.statusCode}.
                            Message: ${response.statusMessage}`
                    );
            }
        });
    } else {
        res.json({});
    }
};