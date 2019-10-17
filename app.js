const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const hbs = require('express-handlebars');

const session = require('express-session');
const MemoryStore = require('memorystore')(session); // Use better version of memorystore, https://www.npmjs.com/package/memorystore

const appConfig = require('config').get('app');
const sessionConfig = require('config').get('session');

const routes = require('./routes/index.routes');
const logger = require('./helpers/logger');

const app = express();
const port = process.env.PORT || appConfig.port;

/*
To remove the X-Powered-By header.
Refer https://helmetjs.github.io/docs/hide-powered-by/
*/
app.use(helmet.hidePoweredBy());

/*
Enables XSS filtering and the browser will prevent rendering of the page if an attack is detected (by browser).
Refer https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
*/
app.use(helmet.xssFilter());


/*
Adding "X-Content-Type-Options: nosniff" header for protection against MIME type Sniffing attacks.
Refer https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options and https://www.keycdn.com/support/what-is-mime-sniffing
*/
app.use(helmet.noSniff());

/*
view engine setup
View Folder - /views
View Engine - Handlebars
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}));

// Declaring Public folder for the app
app.use(express.static(path.join(__dirname, 'public')));

// Set up body parser
app.use(bodyParser.json({ limit: '1mb', type: '*/*' }));


// Add server session
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: sessionConfig.secret,
  store: new MemoryStore({
    checkPeriod: sessionConfig.expiry
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: sessionConfig.cookie.maxAge
  }
}));

// Set up routing
app.use('/', routes);

// Start the server
app.listen(port, () => {
  logger.info(`${appConfig.title} listening on port ${port}`);
});

module.exports = app;
