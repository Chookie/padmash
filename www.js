#!/usr/bin/env node

var config = require("./server/config/config");

var debug = require('./server/config/debug')('www');
debug.log('Starting ' + config.appName + ' server in ' + config.environment + ' environment...');

var app = require('./server/app')(config);

require('./server/config/server')(app);