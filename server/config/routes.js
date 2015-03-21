(function () {

    module.exports = function(app) {

        app.get("/", function (req, res) {
            res.render('index', { title: 'padmash' });
        });

        app.get("/api/users", function (req, res) {
            res.send('respond with a resource');
        });
    };

}());