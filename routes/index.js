var express = require('express');
var router = express.Router();

/* GET home page. */
//noinspection JSUnusedLocalSymbols
router.get('/', function(req, res, next) {
  res.render('index', { title: 'padmash' });
});

module.exports = router;
