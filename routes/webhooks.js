var express = require('express');
var router = express.Router();

var looker = require('@looker/sdk');
var sdk = looker.LookerNodeSDK.init31(new looker.NodeSettings())

var config = require('../config.js');

router.get('/me', function(req, res) {
  sdk.me()
    .then( (result) => res.json(result) )
})

router.get('/models', function(req, res) {
  sdk.all_lookml_models('name')
    .then( (result) => res.json(result) )
})

module.exports = router;
