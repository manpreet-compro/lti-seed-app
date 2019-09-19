
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
A folder to hold the configuration files of the application. Important configurations are:
* PORT - Default port of 3000 is used for express server. 
* App Name - Specify the application name which is used as html title


### /controllers
A folder to hold application logic for API Requests.

### /views
A folder holding server side rendered pages. For rendering, [Pug Template Engine](https://pugjs.org/api/getting-started.html) is used. 

### /public
A folder holding the static assets (imges, css )

### /data
A folder holding the json data for courses, resource links and users

### /tests

A folder holding the spec file containing unit test cases. Whenever a new functionality is added or existing one is modified, corresponding unit test should also be updated

## Packages used
* dependencies 
	* Express (x.y.z) - For node server
	* express-validator ??
	* Template engine - Pug ?
	* Bootstrap - for styling
	* Jsonwebtoken (x.y.z) - For creating or verifying jwt token
	* PM2 (x.y.z) - process manager for node app
	* winston ?? 
	* morgan ??
* devDependencies - For development only
	* test-runner (mocha??) (x.y.z) - For running unit tests
	* test-spec (chai??) (x.y.z) - for writing unit tests
	* test-coverage ( istanbul ??) - for unit test coverage
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