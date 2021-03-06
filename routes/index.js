var express = require('express');
var router = express.Router();

var config = require('../config.js');

router.get('/', function(req, res) {
  res.render('index', config);
});

router.get('/themes/:theme', function(req, res) {
  var theme = {
    theme: {
      location: 'themes',
      name: req.params.theme
    }
  }
  res.render('index', theme);
})

router.get('/confidential/:theme', function(req, res) {
  var theme = {
    theme: {
      location: 'confidential',
      name: req.params.theme
    }
  }
  res.render('index', theme);
})

module.exports = router;
