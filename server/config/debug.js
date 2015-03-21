(function () {

    var debug = require('debug');

    module.exports = function (modulename) {

        var error = debug('padmash:' + modulename);
        var log = debug('padmash:' + modulename);
        log.log = console.log.bind(console);
        return{
            log: log,
            error: error
        }
    };

}());