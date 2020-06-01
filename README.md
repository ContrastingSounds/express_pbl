# Express PBL – As simple as possible demo of embed capabilities

This project is useful for quick mockups, and understanding the core authentication methods and API calls available. Examples of what you can do:

- See what a custom theme will look like in a branded portal
- See how embeded dashboards, explores and looks might fit into a portal
- Build a quick webhook or test an API call

It is NOT useful for production use, nor does it represent a valid reference architecture. Examples of what is missing:

- Components (e.g. React, Vue) or any other technique for building a real web application
- State management
- User authentication (user details are hard coded into a user.json file)

# TODOs

- Move instance details from theme to config.js
- Update config.js to include cors/proxy details
- Update client_scripts/client_calls.js to use config.js for instance, proxy
- Document directory structure and content highlights

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