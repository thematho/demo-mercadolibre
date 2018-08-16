const itemsRoutes = require('./items/items.routes');
const categoriesRoutes = require('./categories/categories.routes');

module.exports =  itemsRoutes.concat(categoriesRoutes);