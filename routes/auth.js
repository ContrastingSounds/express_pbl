var express = require('express');
var router = express.Router();

const { createSignedUrl} = require('../server_utils/auth_utils')
const user = require('../user.json')

router.get('/', function(req, res, next) {
    const src = req.query.src;
    const url = createSignedUrl(src, user, process.env.LOOKER_HOST, process.env.LOOKERSDK_EMBED_SECRET);
    res.json({ url });
});

module.exports = router;