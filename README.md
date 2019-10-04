
# CUP LTI Tool
A javascript based application to create LTI 1.3 Compliant Tool. LTI 1.3 is latest of technology standard developed by the IMS Global Learning Consortium. More details regarding LTI 1.3 Standard are available [here](https://www.imsglobal.org/spec/lti/v1p3)


## Prerequisites
* Node JS (Version 10.16.0) - Download and install Node JS from [Node Js Download Page](https://nodejs.org/en/download/) if not already installed on system.


## Steps to Clone and Run Locally

```javascript
# Clone the repository
git clone https://gitlab.com/cup-lti-gateway/cup-lti-tool.git

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
npm start

# Run on localhost
http://localhost:3000

```

## Project Structure

### /config
Folder having the configuration files for the application, e.g. application port, application name,  etc. The configurations will be managed based on environment with default file having common configuration, and environment specific configuration in specific file

### /controllers
Folder for the controller files responsible for request handling and generation the required response containing the business logic.

### /helpers
Folder for common utility functions which can be used across controllers, e.g. logging or error handling

### /routes 
Folder defining the end points. There are multiple route files, e.g. home route files defining home routes and so on. For each route file, there will be a corresponding controller file in controllers folder

### /views
Folder for keeping server side rendered files implemented using a template engine. For rendering, [Handlebars](https://github.com/wycats/handlebars.js) is being used. 

### /public
Folder for serving static files, e.g. image assets, stylesheets or client side javascript files. It can have different sub-folder for js, css, img, fonts etc

### /tests
A folder holding the spec file containing unit test cases. Whenever a new functionality is added or existing one is modified, corresponding unit test should also be updated

### /validators
A folder defining the request schemas and validations.

## Node Packages used
* dependencies 
	* [express](https://github.com/expressjs/express) - For running node server
	* [ajv](https://github.com/epoberezkin/ajv) - For Request validations
	* [body-parser](https://github.com/expressjs/body-parser) - For parsing incoming post request data
	* [config](https://github.com/lorenwest/node-config) - To manage environment based config files 
	* [express-session](https://github.com/expressjs/session) - For creating server side session
	* [memorystore](https://www.npmjs.com/package/memorystore) - For saving session without datastore
	* [hbs](https://github.com/pillarjs/hbs) - Handlebars Templating engine for server side views
	* [express-handlebars](https://github.com/ericf/express-handlebars) - Integarting handlebars with express
	* [helmet](https://github.com/helmetjs/helmet) - For securing app by setting http headers
	* [winston](https://github.com/winstonjs/winston) - For logging
* devDependencies - For development only
	* [mocha](https://github.com/mochajs/mocha) - Testing Framework for running unit tests
	* [chai](https://github.com/chaijs/chai) - Assertion library for writing unit tests
	* [supertest](https://github.com/visionmedia/supertest) - For testing node js http requests
	* [nyc](https://github.com/istanbuljs/nyc) - For Coverage testing
	* [nodemon](https://github.com/remy/nodemon) - For dev server


## Logging Details
-- TODO --

## Changelog
-- TODO --

## Copyright and license
-- TODO --
