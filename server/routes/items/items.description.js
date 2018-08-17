const request = require('request');
const API_URL = require('./../config').API_URL;

module.exports = (id) => {
    return new Promise((resolve, reject) => {
        request(API_URL + `items/${id}/description`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(JSON.parse(body));
            } else {
                reject({ error: `Message: ${response.statusMessage}` });
                console.error(`ML description API error, code ${response.statusCode}.
                Message: ${response.statusMessage}`);
            }
        });
    });
};