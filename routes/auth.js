var express = require('express');
var router = express.Router();

const { createSignedUrl } = require('../utils/server_auth')
const { generateClientToken } = require('../utils/client_auth')

const config = require('../config')

router.get('/', function(req, res) {
    const src = req.query.src;
    const url = createSignedUrl(src, config.user, process.env.LOOKER_HOST, process.env.LOOKERSDK_EMBED_SECRET);
    res.json({ url });
});

router.get('/clientToken', function(req, res) {
  generateClientToken(config.user.external_user_id)
    .then(token => res.json(token))
});

module.exports = router;