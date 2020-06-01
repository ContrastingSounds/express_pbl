import { Looker31SDK, CorsSession } from '@looker/sdk'
import { cors_proxy, looker_instance } from '../config'
// const config = require('../config')

var sdk
class EmbedSession extends CorsSession {
  async getToken() {
    console.log(document.location)
    const token = await sdk.ok(sdk.authSession.transport.request('GET', `${document.location.origin}/auth/clientToken`  ))
    return token
  }
}

var session = new EmbedSession({
  base_url: `${cors_proxy}/${looker_instance}`
})

var sdk = new Looker31SDK(session)

document.getElementById("me-btn").addEventListener("click", async () => {
  var response = await sdk.ok(sdk.me())
  alert(JSON.stringify(response, null, 2))
});

document.getElementById("models-btn").addEventListener("click", async () => {
  var response = await sdk.ok(sdk.all_lookml_models('name'))
  alert(JSON.stringify(response, null, 2))
});