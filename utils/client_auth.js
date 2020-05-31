var looker = require('@looker/sdk');
var sdk = looker.LookerNodeSDK.init31(new looker.NodeSettings())

function generateClientToken(external_user_id) {
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
exports.generateClientToken = generateClientToken;