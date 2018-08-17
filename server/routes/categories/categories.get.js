const getCategories = require('./getCategories')

module.exports = (req, res) => {
    let id = req.params.id;
    if (id) {
        getCategories(id).then((categories) => {
            res.json(categories.path_from_root);
        }).catch((err) => {
            res.json({ err });
        });
    }
};
