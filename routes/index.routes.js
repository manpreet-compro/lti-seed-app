const Router = require('express').Router();
const appConfig = require('config').get('app');

const HomeRoutes = require('./home.routes');

Router.use('/home', HomeRoutes);

Router.get('/', (req, res) => res.render('index', {
  title: appConfig.title
}));

module.exports = Router;
