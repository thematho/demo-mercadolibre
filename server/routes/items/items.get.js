const data = require('./data');

module.exports = (req, res)=> {
    let items = data.getItems();
    res.json(items[0]);
};