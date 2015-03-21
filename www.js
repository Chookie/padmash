#!/usr/bin/env node

var config = require("./server/config/config");

var debug = require('./server/config/debug')('www');
debug.log('Starting ' + config.appName + ' server in ' + config.environment + ' environment...');

debug.log("Configuring Express...");
var app = require('./server/config/express')(config);

debug.log("Configuring Routes...");
require('./server/config/routes')(app);

// Add error handlers to the end of the express middleware chain
debug.log("Configuring Errorhandler...");
require('./server/config/errorhandler')(app,config);

debug.log("Configuring and starting Server...");
require('./server/config/server')(app);