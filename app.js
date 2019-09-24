const bodyParser = require('body-parser');
const createError = require('http-errors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const session = require('express-session');
const hbs = require( 'express-handlebars');

const config = require('config');
const appConfig = config.get('app');

const app = express();
const port = process.env.PORT || appConfig.port;

/*
To remove the X-Powered-By header.
Refer https://helmetjs.github.io/docs/hide-powered-by/
*/
app.use(helmet.hidePoweredBy())

/* 
Enables XSS filtering and the browser will prevent rendering of the page if an attack is detected (by browser).
Refer https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
*/
app.use(helmet.xssFilter())


/*
Adding "X-Content-Type-Options: nosniff" header for protection against MIME type Sniffing attacks.
Refer https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options and https://www.keycdn.com/support/what-is-mime-sniffing
*/
app.use(helmet.noSniff())

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

/* 
Declaring Public folder for the app
*/
app.use(express.static(path.join(__dirname, 'public')));

// Set up body parser
app.use(bodyParser.json({ limit: '1mb', type: '*/*' }));

/*
Add server session
*/
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: appConfig.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }
))

app.get('/', (req,res)=>{
  res.render('home');
})

app.get('/session', (req,res)=>{
  req.session.key1 = "value1"
  res.json({session:req.session})
})

app.listen(port,()=>{
  console.log(`${config.title} listening on port ${port}`);
})

module.exports = app;
