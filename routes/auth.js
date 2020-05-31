var express = require('express');
var router = express.Router();

const { createSignedUrl } = require('../utils/server_auth')
const { generateClientToken } = require('../utils/client_auth')
const user = require('../user.json')

router.get('/', function(req, res) {
    const src = req.query.src;
    const url = createSignedUrl(src, user, process.env.LOOKER_HOST, process.env.LOOKERSDK_EMBED_SECRET);
    res.json({ url });
});

router.get('/clientToken', function(req, res) {
  generateClientToken(user.external_user_id)
    .then(token => res.json(token))
});

module.exports = router;