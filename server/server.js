const express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    app = express(),
    router = express.Router(),
    port = process.env.PORT || 8080;

// App code
const routes = require('./routes/routes'),
    middlewareList = require('./middleware/middleware');

// Load Middleware functions
middlewareList.forEach((middleware) => {
    app.use(middleware);
});

// Pre-renderer for SEO with AngularJS
app.use(require('prerender-node').set('prerenderToken', 'ywZYSnwlRNo6922dy2xq'));

// Load route & handlers
routes.forEach((route) => {
    router[route.method](route.path, route.handler);
});

app.use('/api', router);

app.use(compression());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all("/*", function (req, res, next) {
    res.sendFile("index.html", { root: __dirname + "./../dist" });
});


app.listen(port);
console.log(`on port ${port}`);