(function () {

    var express = require('express');
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    module.exports = function (config) {

        var app = express();

        // view engine setup
        app.set('views', config.rootPath + '/server/views');
        app.set('view engine', 'jade');

        // uncomment after placing your favicon in /public
        app.use(favicon(config.rootPath + '/public/favicon.ico'));
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(require('stylus').middleware(config.rootPath + '/public'));
        app.use(express.static(config.rootPath + '/public'));

        return app;
    };

}());
