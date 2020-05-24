var express = require('express');
var router = express.Router();
var path = require('path');

var config = require('../config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join('themes', config.theme, 'index.html'), { root : path.join(__dirname, '../public') });
});

module.exports = router;
