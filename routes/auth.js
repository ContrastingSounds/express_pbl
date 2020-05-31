var express = require('express');
var router = express.Router();

var looker = require('@looker/sdk');
var sdk = looker.LookerNodeSDK.init31(new looker.NodeSettings())

const { createSignedUrl } = require('../server_utils/auth_utils')
const user = require('../user.json')

const generateUserToken = (external_user_id) => {
  return new Promise((resolve, reject) => {
    sdk.ok(sdk.user_for_credential('embed', external_user_id))
      .then(user => {
        if (user && user.id) {
          return sdk.ok(sdk.login_user(user['id']))
            .then(userToken => resolve(userToken))
            .catch(err => reject(err))
        } else {
          return resolve({})
        }
      })
      .catch(err => reject(err))
  })
}

router.get('/', function(req, res) {
    const src = req.query.src;
    const url = createSignedUrl(src, user, process.env.LOOKER_HOST, process.env.LOOKERSDK_EMBED_SECRET);
    res.json({ url });
});

router.get('/clientToken', function(req, res) {
  generateUserToken(user.external_user_id)
    .then(token => res.json(token))
});

module.exports = router;