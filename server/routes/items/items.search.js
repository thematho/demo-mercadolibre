const data = require('./data');

module.exports = (req, res) => {
    let search = req.query.search;
    res.json(data.getItems());
};