# Template Application
Starter Code for a Javascript application

## Prerequisites
* Node JS (Version 10.16.0) - Download and install Node JS from [Node Js Download Page](https://nodejs.org/en/download/) if not already installed on system.

## Steps to run Locally
```javascript
# Clone the repository
git clone https://github.com/manpreet-compro/lti-seed-app.git

# Change directory
cd lti-seed-app

# Install NPM dependencies
npm install

# Then simply start your app
npm start

# Test on localhost
http://localhost:3000

```

## Project Structure

```
├───config 			# Configuration files 
├───public			# Client-side application, e.g. image assets, stylesheets and javascript files
│   ├───css
│   └───js
├───routes			# Server-side end points. For each route, there will be a corresponding controller file in "Controllers" folder
├───controllers		        # Server-side controllers responsible for request handling and generating corresponding response as per business logic
├───validators		        # Server-side request validations
└───views			# Server-side view templates. 
    ├───layouts
    └───partials
├───helpers			# Common utility functions 
├───test			# Files containing unit test cases
```

## Node Packages used
* dependencies 
	* [express](https://github.com/expressjs/express) - Servside framework
	* [express-session](https://github.com/expressjs/session) - For server side session
    * [memorystore](https://www.npmjs.com/package/memorystore) - For saving session without datastore	
    * [config](https://github.com/lorenwest/node-config) - To manage environment based config files 
	* [ajv](https://github.com/epoberezkin/ajv) - For Request validations
	* [body-parser](https://github.com/expressjs/body-parser) - For parsing incoming post request data
	* [hbs](https://github.com/pillarjs/hbs) - Handlebars Templating engine for server side views
	* [express-handlebars](https://github.com/ericf/express-handlebars) - Integarting handlebars with express
	* [helmet](https://github.com/helmetjs/helmet) - For securing app by setting http headers
	* [winston](https://github.com/winstonjs/winston) - For logging
* devDependencies - For development only
	* [mocha](https://github.com/mochajs/mocha) - Testing Framework for unit tests
	* [chai](https://github.com/chaijs/chai) - Testing Assertion library for writing unit tests
	* [supertest](https://github.com/visionmedia/supertest) - Testing lib for node js http requests
	* [nodemon](https://github.com/remy/nodemon) - For local development environment

## Environment Setup / Variables
* NODE_ENV - Application environment. Possible values are development and production.

## Copyright and license
-- TODO --
