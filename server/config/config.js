(function () {
    var path = require('path');

    var rootPath = path.normalize(__dirname + "/../../");

    /**
     * Normalize a port into a number, string, or false.
     */

    function normalizePort(val) {
        var port = parseInt(process.env.PORT || val.toString(), 10);

        if (isNaN(port)) {
            // named pipe
            return val;
        }

        if (port >= 0) {
            // port number
            return port;
        }

        return false;
    }

    // Node has variable for environment, if it has been set else default
    var env = process.env.DEBUG_ENV = process.env.DEBUG_ENV || 'development';

    var environments = {
        development: {
            appName: 'padmash',
            environment: env,
            db: process.env.MONGODB_URL || 'mongodb://localhost:27017/multivision',
            rootPath: rootPath,
            port: normalizePort(3000)
        },
        production: {
            appName: 'padmash',
            environment: env,
            db: process.env.MONGODB_URL || 'mongodb://localhost:27017/multivision',
            rootPath: rootPath,
            port: normalizePort(80)
        }
    };

    module.exports = environments[env];

}());

