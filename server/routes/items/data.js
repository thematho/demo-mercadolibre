const fs = require('fs'),
 path = require('path'),
 jsonPath = path.resolve(__dirname, 'items.json');

 let items = [];

fs.readFile(jsonPath, { encoding: 'utf8' }, (err, data)=> {
    if (err) throw err;
    items = JSON.parse(data);
});

module.exports = {
    getItems: () => items
};