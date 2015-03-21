(function () {

    module.exports = function(app) {

/*        app.get("/", function (req, res) {
            res.render('index', { title: 'padmash' });
        });*/

        app.get("/api/users", function (req, res) {
            res.send('respond with a resource');
        });

        // Requests coming from angular, send back the fragment (partial) it wants
        // index[0] returns the star, zeroth element
        // Also moving folder.  Paths is relative to views directory as per view engine above
        app.get('/partials/*', function (req, res) {
            res.render('../../public/app/' + req.params[0]) ;
        });

        // * means how to handle all requests and send to index page
        // Server will always return index.html client page which will then route on client side using angular routing etc.
        // Making client do all the routing rather then this server
        app.get('*', function (req, res) {
            res.render('index', {
                bootstrappedUser: req.user
            });
        });
    };

}());