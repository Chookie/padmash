#!/usr/bin/env node

var debug = require('./server/config/debug')('www');
var app = require('./server/app');

require('./server/config/server')(app);
