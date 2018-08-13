const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    router = express.Router(),
    port = process.env.PORT || 8080;

// App code
const routes = require('./routes/routes'),
    middlewareList = require('./middleware/middleware');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load Middleware functions
middlewareList.forEach((middleware) => {
    app.use(middleware);
});

// Load route & handlers
routes.forEach((route) => {
    router[route.method](route.path, route.handler);
});
// 
app.use('/api', router);

app.listen(port);
console.log(`on port ${port}`);