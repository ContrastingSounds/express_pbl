# Express PBL – As simple as possible demo of embed capabilities

This project is useful for quick mockups, and understanding the core authentication methods and API calls available. Examples of what you can do:

- See what a custom theme will look like in a branded portal
- Demonstrate how embeded dashboards, explores and looks can fit into a portal
- Build a quick webhook or test an API call

It is NOT valid for production use, nor is it a useful reference architecture. Examples of what is missing:

- Components (e.g. React, Vue) or any other technique for building a real web application
- State management
- Data persistence
- User authentication (user details are hard coded into the config.js file)

# Getting started

Express PBL is based on [Simple PBL](https://github.com/ContrastingSounds/express_pbl) – except that it is a full web application instead of a set of static files. This enables the authentication methods necessary to use the SDKs.  Getting started has two major steps:

1. Installation
2. Configuration

## Installation

1. [Install yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) if not already present
2. `git clone https://github.com/ContrastingSounds/express_pbl.git`
3. `cd express_pbl`
4. `yarn install`

## Configuration

Changes are required in the following places:

1. On the Looker Instance
2. Update default theme or add your own, at least:
   - theme.js
   - images in `img/` directory
3. Update config.js file in root directory
4. (Optional) Update the html content
5. Create a `start` script, based on `start.example`
6. [Download and install the cors-proxy](#cors-proxy), if you want to make client-side API calls
7. Run `./start` once configured

NOTE: you can have multiple themes available for demonstration, by replicating the full directory structure. Examples of this are found in the `themes` and `confidential_example` directories.

_The `.gitignore` directory includes a `confidential` directory for scenarios where it is important to have commercially branded themes that must not be uploaded to the GitHub repo._

### On the Looker instance:
_admin/embed_ - Set Embedded Domain Whitelist at https://<your_instance>.looker.com/admin/embed

_admin/themes_ - Set Theme (I recommend getting rid of the grey background by quickly copying Looker theme to LookerWhite, and setting the background to #ffffff )

### Update /public/themes/default (or add your own theme)
For simplest configuration, replace the images provided:

#### img/
- favicon.ico (_Standard browser tab favicon_)
- image.png (_340 x 150px. Used as a background image for sidebar_)
- logo.png (_Height approx 50px. Used for the center of the nav bar_)

#### theme.js
All icons refer to the Material Design icon set. Refer to https://materializecss.com/icons.html.

1. Update baseURL and embedDomain
2. Update sidebarItems: {} 
   - Use type: 'li' for a link to content
     - Use content: '' to refer to one of the keys in your content object (also used for the display text)
   - Use type: 'subheader' to create a subheader
     - Use text: '' for the text you want displayed in the sidebar
3. Review the full config.js file, other things such as the page title can also be set

### config.js

Checklist: 

1. Theme content has been updated, and exports.theme points to it 
2. Looker instance is set
3. Cors proxy is set (unless client-side calls not being used)
4. User is chosen from array of available users
5. User definition is correct, in particular:
   - Permissions granted
   - Models listed

### HTML

You can add more or remove pages using the `navbarMenu` object in `theme.js`. These can be used to provide explanatory text or images. The default files are intended to support:

1. A 'Themes' page that enables you to switch between different themes
2. A 'Client Calls' page to trigger client-side API calls
3. A 'Server Calls' page to trigger server-side API calls
4. A 'Cloud Native' page to explain Looker's architecture and role within a larger digital or cloud strategy

The "white" theme includes a slightly different set of HTML pages, as an example of tailoring the content to fit your mockup requirement.

### start script

1. `cp start.example start`
2. Update all environment variables 

# For hackers: things easy to change

- Themes: Everything in /public/themes/
- Client side scripts: Add .js file to `/client_scripts`, will be individually bundled by webpack 
- Server side webhooks: Add endpoints to `/routes/webhooks.js`

# TODO

- Update harded coded line `client_scripts/express_pbl.js`: `dashboard.updateFilters({'State': 'California'});`

_(Filter updates and interactivity rather limited! If you click on the logo, it's hardcoded to update a single filter value. At least the code pattern is in place...)_

# References 

## CORS Proxy
https://github.com/bryan-at-looker/embed-api-sdk-needs-cors-proxy

1. `git clone https://github.com/Rob--W/cors-anywhere.git`
2. `cd cors-anywhere`
3. `npm install`
4. `npm audit fix --force` (optional fix the vulnerabilities)

### start the server
`node server.js`
(note: this step is built in to the `start` script provided)