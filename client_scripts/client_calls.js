import { Looker31SDK, CorsSession } from '@looker/sdk'

var sdk
class EmbedSession extends CorsSession {
  async getToken() {
    console.log(document.location)
    const token = await sdk.ok(sdk.authSession.transport.request('GET', `${document.location.origin}/auth/clientToken`  ))
    return token
  }
}

var session = new EmbedSession({
  base_url: 'http://localhost:8080/https://demo.looker.com:19999',
})
console.log('session', session)

var sdk = new Looker31SDK(session)
console.log('client_hook.js: sdk:', sdk)

document.getElementById("me-btn").addEventListener("click", async () => {
  var response = await sdk.ok(sdk.me())
                        // .then( (result) => console.log(result) )
  alert(JSON.stringify(response))
});

document.getElementById("models-btn").addEventListener("click", async () => {
  var response = await sdk.ok(sdk.all_lookml_models('name'))
                          // .then( (result) => console.log(result) )
  alert(JSON.stringify(response))
});