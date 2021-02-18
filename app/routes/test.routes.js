const controller = require("../controllers/test.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get('/test',controller.test);
    app.get('/paramtest/:name',controller.paramtest);
    app.get('/querytest',controller.querytest);
    app.post('/test/test1',controller.posttest);
}