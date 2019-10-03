
# LTI 1.3 Seed App 

A seed application to create LTI 1.3 Compliant Platform or Tool using NodeJS. LTI 1.3 is latest of technology standard developed by the IMS Global Learning Consortium. 


## Prerequisites

* Node JS (Version 10.16.0) - Download and install Node JS from [Node Js Download Page](https://nodejs.org/en/download/)if not already installed on system.


## Getting Started

The easiest way to get started is to clone the repository:

```javascript
# Clone the repository
git clone https://github.com/<<repo-path>>.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
npm start
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

### /data
A folder having static json data for courses, resource links and users etc which will be required for implementing tool or platform initially till datastorage is integrated.

### /tests
A folder holding the spec file containing unit test cases. Whenever a new functionality is added or existing one is modified, corresponding unit test should also be updated

## Packages used
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
	* eslint?? - for javascript linting and coding standards
	* Nodemon ??


## Logging

-- Details about logging, level of logging, log files, rotation of log files etc..

## Project Keys
-- Details of how keys will be stored and how will be managed for different environments such as dev, staging, prod

## Bugs and feature requests
Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, please open a new issue.

## Changelog

--You can find the changelog for the project in: CHANGELOG.md

## Copyright and license
--Details about copyright, type of license
