# Express PBL – As simple as possible demo of embed capabilities

# Things to change

/public/themes/
/routes/webhooks.js

# References 

## CORS Proxy
https://github.com/bryan-at-looker/embed-api-sdk-needs-cors-proxy

git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere
npm install

### optional fix the vulnerabilities
npm audit fix --force

### start the server
node server.js